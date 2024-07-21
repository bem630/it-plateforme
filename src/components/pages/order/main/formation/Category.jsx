import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Category() {
    const [error, setError] = useState(null);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:1337/api/categories?populate=*")
          .then(({ data }) => setCategory(data.data))
          .catch((error) => setError(error));
      }, []);
      if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }
  return (
    <CategoryStyled className='category'>
        <h2 className='title-category-formation'>Formations populaires</h2>
        <div className="category-cards">
            {category.map(({ id, attributes }) => { 
                return (
                    <div key={id} className="category-card">
                        <Link to={`/formation/${attributes.Name}`} className="categorgy-link">
                            <div className="category-card-subtitle">
                                <h3>{attributes.Name}</h3>
                                <FaArrowRight className='category-link__icon'/>
                            </div>
                            
                        </Link>
                    </div>
            )}
            )}
        </div>
    </CategoryStyled>
  )
}
const CategoryStyled = styled.div`
    /*border: 5px solid red;*/
    padding: 60px 0;
    background-color: #f5f5f5;
    .title-category-formation {
        text-align: center;
        font-weight: bold;
        color: #0c2e60;
        font-size: 44px;
    }
    .category-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 60px;
        gap: 50px;
        justify-content: space-between;
        align-items: center;
        .category-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            width: 100%;
            padding: 30px 0;
            text-align: center;
            transition: transform 0.3s ease;
            &:hover {
                transform: scale(1.05);
                /*background-color: #007bff;*/
            }
            .categorgy-link {
                text-decoration: none;
                color: #333;
            .category-card-subtitle {
                display: flex;
                align-items: center;
                justify-content: center;
                h3 {
                    padding-right: 10px;
                }
            }
            }
    }
    }
    @media (max-width: 1080px) {
        .title-category-formation {
            font-size: 28px;
        }

        .category-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin: 30px;

            .category-card {
                padding: 15px 0;

                .category-card-subtitle {
                    h3 {
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media (max-width: 700px) {
        .title-category-formation {
            font-size: 28px;
        }

        .category-cards {
            grid-template-columns: 1fr;
            gap: 30px;
            margin: 30px;

            .category-card {
                padding: 15px 0;

                .category-card-subtitle {
                    h3 {
                        font-size: 18px;
                    }
                }
            }
        }
    }
    @media (max-width: 480px) {
        .title-category-formation {
            font-size: 24px;
        }

        .category-cards {
            margin: 20px;

            .category-card {
                padding: 10px 0;

                .category-card-subtitle {
                    h3 {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`;
