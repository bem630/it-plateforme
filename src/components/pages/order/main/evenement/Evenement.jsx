import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import axios from "axios";
import styled from 'styled-components';

export default function Evenement() {
    //state
    const [error, setError] = useState(null);
    //comportements
    const [evenements, setEvenements] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:1337/api/evenements?populate=*")
        .then(({ data }) => setEvenements(data.data))
        .catch((error) => setError(error));
    }, []);
    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
    }
    //affichage
  return (
    <EvenementStyled>
        <h2 className='title-evenement'>Evènements à Venir</h2>
        <p className='detail-evenement'>
            Tu souhaites nous rencontrer ? En savoir plus sur une formation, sur nos locaux ? N’hésite pas à t’inscrire à nos évènements pour enrichir vos connaissances. ! 📅 
        </p>
        <div className="event-grid">
        {
                evenements.map(({attributes,id}) => (
                    <div key={id} className='event-card'>
                        <img src={`http://localhost:1337${attributes.image.data.attributes.url}`} alt="event image" className='event-img' />
                        <div className="event-content">
                            <div className="event-content-date">
                                <div className='event-icon'><FaRegCalendarAlt  /></div>
                                <p className="event-card-date">{new Date(attributes.date).toLocaleDateString()}</p>
                            </div>
                            <h4 className="event-card-title">{attributes.Name}</h4>
                            <p className="event-card-detail">{attributes.detail.substring(0, 100)}...</p>
                            <Link to={`/evenement/${id}`} className="evenement-link">En savoir plus</Link>
                        </div>
                    </div>
                ) )
            }
        </div>
    </EvenementStyled>
  )
}
const EvenementStyled = styled.div`
  /*border: 1px solid blue;*/
  text-align: center;
  padding: 60px 2rem;
  .title-evenement {
        color: #0c2e60;
        margin-bottom: 10px;
        font-size: 44px;
        text-align: center;
    }
    .detail-evenement{
        margin-bottom: 40px;
        text-align: center;
        font-size: 14px;
    }
    .event-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 50px;
        margin: 60px;
        width: 100%;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        .event-card {
            border: 1px solid blue;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            text-align: left;
            margin-bottom: 20px;
            overflow: hidden;
            width: 100%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            }
            .event-img {
                width: 100%;
                height: 260px;
                object-fit: cover;
            }
            .event-content {
                /*border: 1px solid green;*/
                margin: 16px 16px;
                text-align: left;
                margin-bottom: 30px;
                .event-content-date {
                    /*border: 1px solid blue;*/
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    .event-icon {
                        margin-right: 10px;
                    }
                }
                .event-card-title {
                    text-align: left;
                    color: #222;
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 16px;
                }
                .event-card-detail {
                    text-align: justify;
                    color: #666;
                    margin-bottom: 16px;
                }
                .evenement-link {
                    text-align: left;
                    color: #0c2e60;
                    text-decoration: none;
                    border: 1px solid #000;
                    padding: 10px 20px;
                    text-align: center;
                    border-radius: 5px;
                    &:hover {
                        color: #0056b3;
                    }
                }
            }
        }
    }
    @media (max-width: 880px) {

        .title-evenement {
            font-size: 36px;
        }

        .event-grid {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            margin: 40px;
            width: 100%;
            margin: auto;

            .event-card {
                padding: 20px 0;
                padding-top: 0px;

                .event-content {
                    margin: 10px 10px;
                    .event-card-title {
                        font-size: 20px;
                    }
                    .event-card-detail {
                        font-size: 14px;
                    }
                    .evenement-link {
                        font-size: 14px;
                        padding: 8px 16px;
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .title-evenement {
            font-size: 28px;
        }

        .event-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin: 30px;
            width: 100%;
            margin: auto;

            .event-card {
                padding: 15px 0;
                padding-top: 0px;

                .event-content {
                    margin: 8px 8px;
                    .event-card-title {
                        font-size: 18px;
                    }
                    .event-card-detail {
                        font-size: 13px;
                    }
                    .evenement-link {
                        font-size: 12px;
                        padding: 6px 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .title-evenement {
            font-size: 24px;
        }

        .event-grid {
            margin: 20px;
            width: 100%;
            margin: auto;

            .event-card {
                padding: 10px 0;
                padding-top: 0px;

                .event-content {
                    margin: 6px 6px;
                    .event-card-title {
                        font-size: 16px;
                    }
                    .event-card-detail {
                        font-size: 12px;
                    }
                    .evenement-link {
                        font-size: 10px;
                        padding: 4px 8px;
                    }
                }
            }
        }
    }
`;
