import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      {/* Footer / */}
      
      <Wrapper>

      <div className='main' >
        <div className="upperFooter" >
            <div className="innerUpperFooter" >
            <div className="left">
                <p className="para">Ready to get started</p>
                <p className="para" >Talk to us today</p>
            </div>
            <div className="right">
                <NavLink to="/contact">
                <button className="btn">GET STARTED</button>
                </NavLink>
            </div>
            </div>
        </div>

        {/* main footer  */}

        <div className="mainFooter">
            <div className="fourParts">
                <div className="first">
                    <p className="para" >Coding Application</p>
                    <p>Lorem ipsum dolor, sit amet.. consectetur adipisicing elit. </p>
                    
                </div>
                <div className="second" >
                    <p>Subscribe and get important updates </p>
                    <div className="inp" >
                    <input className='input'  type="email" placeholder='Enter your email' />
                    <NavLink to="contact" >
                    <button className="btn" >SUBSCRIBE</button>
                    </NavLink>
                    </div>
                </div>
             
                <div className="fourth">
                    <p>Call us</p>
                    <p>+91 123456789</p>
                </div>
            </div>
        <hr width="80%" className='hr' />

            <div className="lastFooterPart">
                <div className="lastFooter">
                <div className="date">
                    <p>@ {new Date().getFullYear()} Application. All Rights Reserved</p>
                </div>
                <div className="policy">
                    <p>PRIVATE POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
                </div>
            </div>
        </div>

    </div>

      </Wrapper>

    </div>
  )
}

export default Footer



const Wrapper = styled.section`
  .main{position : relative; margin-top:6rem;  }

  .upperFooter{ width : 100%; position : relative; z-index : 1;}

  .innerUpperFooter{ margin : 12px auto; width : 60%; padding : 12px; background-color : rgb(247 247 247); border-radius : 12px; display : flex; justify-content : space-around; align-items : center; max-width: 85%;  border:1px solid black; }

  .para{ margin : 12px 0px 10px ; font-size : 14px; }

  .btn{ border-radius : 12px; border : none; background-color : rgb(49 21 218 / 72%); color: aliceblue; width: 100%;
    padding: 6px 30px; font-size: 16px; }

  .mainFooter { width : 100%; padding : 12px;  background-color : rgb(6 21 85 / 97%); color : white ; padding : 6rem 0rem 3rem 0rem  ; position : absolute; top : 3rem; }

  .fourParts { width : 60%; margin : 12px auto ; display : flex; justify-content : space-between; gap : 1rem; font-size : 14px; font-family: math;  }

  .first{ width : 100%; padding : 12px; }

  .second{ width : 100%; padding : 12px; }

  .inp { display : flex; flex-direction : column; margin : 12px; gap : 12px; }

  .input { padding : 6px 10px; }

  .third{ width : 100%; padding : 12px; }

  .icons { display : flex; justify-content: space-evenly;  align-items : center; max-width: 100%; width: 75%; height: 28%; margin: 12px ;  }

  .span { content : " "  ; padding : 12px; border-radius : 50%; background-color : #fff; width : 400%; height : 100%; text-align : center; margin: 0px 3px; }

  .fourth{ width : inherit; padding : 12px; }

  .hr{margin : 0px auto ;}

  .lastFooterPart { width : 100%; gap:3rem; }

  .lastFooter { width : 60%; margin : 1rem auto; display : flex; justify-content : space-between; font-size : 12px; }

  p{margin-bottom: 0rem;}

  ${'' /* responsive  */}


  @media screen and (max-width: 1300px) {
    .mainFooter{
      flex-wrap: wrap;
      gap:.5rem;
    }
    .fourParts{
      width:70%;
    }
  }

  @media screen and (max-width: 1100px) {
    .fourParts{
      width:89%;
    }
    .first, .second, .third, .fourth{
      padding:0px;
    }
  }

  @media screen and (max-width: 864px) {
    .fourParts{
      width: 94%;
    display: flex;
    text-align: center;
    }
    .third .icons{
      display: flex;
    text-align: center;
    max-width: 100%;
    margin: 12px auto;
    }
    .lastFooter{
      width:75%;
    }
  }

  @media screen and (max-width: 661px) {
    .second .inp .input{
    width: 100%;
    padding: 4px;
    }
    .second .inp .btn{
    width: 86%;
    padding: 4px;
    font-size:13px;
    }
    .fourParts{
      display:flex;
      flex-wrap:wrap;
      font-size:12.8px;
    }
    .first, .second, .third, .fourth{
      width:48%;
      font-size:12.8px;
    }
    .fourth{
      margin:auto;
    }
    .third .icons{
      width: 50%;
      height: 50%;
    }
    .fourParts{
      gap:.4rem;
    }
    .lastFooter{
      width:93%;
      gap:2rem;
      font-size:12.8px;
      display:flex;
      justify-content:space-around;
    }

    .innerUpperFooter {
      width:100%;
      padding: 6px;
    }

    .innerUpperFooter .left .para {
      font-size:12.8px;
    }
    .innerUpperFooter .right .btn {
      font-size:12.8px ;
      padding:6px 15px;
      }
  }

  @media screen and (max-width: 510px) {
    .innerUpperFooter {
      display:flex;
      ${'' /* flex-direction: column; */}
      width:100%;
      padding: 6px;
    }
    .innerUpperFooter .left .para {
      margin:4px;
    }
    .mainFooter{padding: 3rem 0rem 3rem 0rem;}
  }

`;
