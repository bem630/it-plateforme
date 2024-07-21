import React from 'react'
import styled from 'styled-components';
import { partenaire } from '../../../../../data/FakeData.jsx'

export default function Partenaire() {
  return (
    <PartenaireStyled className='partenaire'>
        <h2 className='title-partenaine'>Décrochez un poste dans les meilleures entreprises en Guinée</h2>
        <p className="detail-partenaire">
            Développez de nouvelles compétences techniques en quelques semaines grâce à nos formations intensives et immersives.
        </p>
        <div className="logo-partenaire">
            {
                partenaire.map(({id,img}) => (
                    <div className="image" key={id}>
                        <img src={img} alt="logo-partenaire" />
                    </div>
                ))
            }
        </div>
    </PartenaireStyled>
  )
}
const PartenaireStyled = styled.div`
  text-align: center;
  padding: 60px 2%;
  background-color: #f5f5f5;
  /*border: 1px solid red;*/
  .title-partenaine {
    font-size: 2rem;
    margin-bottom: 6px;
    color: #0c2e60;
    }
    .detail-partenaire {
    margin-bottom: 40px;
    font-size: 14px;
    }
    .logo-partenaire {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .image {
            background-repeat: no-repeat;
            clear: both;
            background-size: cover;
            outline: none;
            margin: 25px;
            img {
                height: 70px;
            }
        }
    }
    @media (max-width: 1024px) {
    .title-partenaire {
      font-size: 1.8rem;
    }

    .detail-partenaire {
      font-size: 13px;
    }

    .logo-partenaire .image {
      margin: 20px;

      img {
        height: 60px;
      }
    }
  }
  @media (max-width: 768px) {
    .title-partenaire {
      font-size: 1.6rem;
    }

    .detail-partenaire {
      font-size: 12px;
    }

    .logo-partenaire .image {
      margin: 15px;

      img {
        height: 50px;
      }
    }
  }
  @media (max-width: 480px) {
    .title-partenaire {
      font-size: 1.4rem;
    }

    .detail-partenaire {
      font-size: 11px;
    }

    .logo-partenaire .image {
      margin: 10px;

      img {
        height: 40px;
      }
    }
  }
`;
