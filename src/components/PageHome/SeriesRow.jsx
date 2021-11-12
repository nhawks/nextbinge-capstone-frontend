import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Image } from 'react-bootstrap';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

function SeriesRow({ title, requestURL}) {
    const baseURL = "https://api.themoviedb.org/3/"
    const imageURL = "https://image.tmdb.org/t/p/w500/"
    const [series, setSeries] = useState([]);

    useEffect(() => {
        async function getShows() {
            try {
                const response = await axios.get(`${baseURL}${requestURL}`)
                setSeries(response.data.results)
                return response
            } catch(err) {
                console.log("🚀 ~ file: SeriesRow.jsx ~ line 17 ~ getShows ~ err", err)
            }
        }
        getShows()
    }, [requestURL]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        mobileFirst:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              initialSlide: 5
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      };

    return ( 
        <div>
            <h2>{title}</h2>
            <Slider {...settings}>
                {series.map((show) => (
                    <div>
                        <Image
                            className="hover-shadow mask-overlay"
                            key={show.id}
                            src={`${imageURL}${show.poster_path}`}
                            alt={show.name}
                            fluid
                            rounded
                            style={{ Width: '60rem', maxHeight: "200px" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
     );
}

export default SeriesRow;