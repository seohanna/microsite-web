import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
 
  ${(props) => props.theme.window.mobile} {

  }
`;

const ContentBox = styled.div`
  position: relative;
  padding: 12% 0 0 0;

  ${(props) => props.theme.window.mobile} {
    padding: 9% 0 0 0;
  }
`;

const TitleBox = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  background-color: #FF9243;
  color: #FFFFFF;
  z-index: 2;
  padding: 1.12% 2.9%;
  text-align: center;
  display: inline-block;
  transform: translateY(40%);

  ${(props) => props.theme.window.mobile} {
    padding: 0;
    height: 30px;
    width: 100px;
    line-height: 30px;
  }
`;

const TextBox = styled.div`
  background-color: #FAFAFA;
  padding: 2.5% 1.2%;
  
  > ul {
    margin-left: 2%;
    > li {
      font-size: 1rem;
      position: relative;
      margin-bottom: 3%;
      :last-child {
        margin-bottom: 0;
      }
      ::before {
        content: '';
        display: block;
        width: 4px;
        height : 4px;
        border-radius: 50%;
        background-color: #393939;
        position: absolute;
        top: 14px;
        left: -1%;
      }
      > br {
        display: none;
      }
      > ul {
        display: flex;
        justify-content: space-between;
        padding: 2%;
        > li {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin-right: 80px;
          background-color: #EBEBEB;
          border-radius: 5px;
          ::after {
            content: '→';
            display: block;
            font-size: 1rem;
            width: 1.5rem;
            color: #393939;
            position: absolute;
            top: 15px;
            right: -60px;
          }
          :last-child {
            margin-right: 0;
          }
          :last-child::after {
            content: none;
          }
        }
      }
    }
  }
  ol {
        display: flex;
        justify-content: space-between;
        padding: 2%;
        > li {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin-right: 5%;
          background-color: #EBEBEB;
          border-radius: 5px;
          ::after {
            content: '→';
            display: block;
            font-size: 1rem;
            color: #393939;
            position: absolute;
            top: 15px;
            right: -2rem;
          }
          :last-child {
            margin-right: 0;
          }
          :last-child::after {
            content: none;
          }
        }
      }
  > p {
    font-size: 0.7rem;
    color: #C91717;
    padding-top: 2.5%;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 5% 4.3%;

    > ul {
    margin-left: 7%;
    > li {
      font-size: 0.8666666666666667rem;
      margin-bottom: 2%;
      ::before {
        top: 8px;
        left: -4%;
      }
      > br {
        display: block;
      }
      > b {
        display: none;
      }
      > ul {
        flex-direction: column;
        padding: 5.2% 0 9% 0;
        > li {
          flex: none;
          height: 30px;
          margin: 0 0 40px 0;
          ::after {
            transform: rotate(90deg);
            top: 45px;
            right: calc(50% - 15px) ;
            width: 1.4rem;
            height: 1rem;
          }
          :last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  ol {
      flex-direction: column;
      padding: 5.2% 0 9% 0;
      > li {
          position: relative;
          height: 30px;
          flex: none;
          margin: 0 0 40px 0;
          font-size: 0.8666666666666667rem;
          ::after {
            transform: rotate(90deg);
            top: 45px;
            right: calc(50% - 15px) ;
            width: 1.4rem;
            height: 1rem;
          }
          :last-child {
            margin-right: 0;
            margin-bottom: 0;
          }
        }
      }
  > p {
      font-size: 0.6666666666666667rem;
      padding: 5% 3% 0 4%;
    }
  }
`;

function ListContent({title, children}) {
  return (
    <Wrap>
      <ContentBox>
        <TitleBox>{title}</TitleBox>
        <TextBox>
          {children}
        </TextBox>
      </ContentBox>
    </Wrap>
    
  )
}

export default ListContent