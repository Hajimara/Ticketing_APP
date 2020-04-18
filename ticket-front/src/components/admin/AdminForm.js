import React from "react";
import styled from "styled-components";
import { arrayDate } from "../../lib/getWeek";

const AdminBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin: 0 auto;
width:1100px;
height:900px;
`;

const AdminBoxWrapper = styled.div`
width:1100px;
height:900px;
display:flex;
flex-direction:column;

`;


const LineWrapper = styled.div`
display:flex;
margin:10px;
padding: 0 5px;
`;

const AdminForm = ({onSubmit,onChange,movie,form,error}) => {
    return (
      <>
        <AdminBox>
          <AdminBoxWrapper>
            <h1>예매시간 추가 페이지</h1>
            <form onSubmit={onSubmit}>
              <LineWrapper>
                movieId:{" "}
                <select name='movieId' value={form.movieId} onChange={onChange}>
                <option></option>
                {movie && movie.results.map((data,index)=>{
                    return <option>{data.id}</option>
                })}
              </select>
              </LineWrapper>
              <LineWrapper>
                price:{" "}
                <select name='price' value={form.price} onChange={onChange}>
                <option></option>
                <option>9000</option>
                <option>10000</option>
              </select>
              </LineWrapper>
              
              <LineWrapper>
              movieDate: <select name='movieDate' value={form.movieDate} onChange={onChange}>
              <option></option>
              {arrayDate.map((date,index)=>{
                  return <>
                    <option>{date.toString()}</option>
                  </>
              })}
              </select>
              </LineWrapper>
              <LineWrapper>
              totalSeat: 
              <select name='totalSeat' value={form.totalSeat} onChange={onChange}>
              <option></option>
                <option>100</option>
              </select>
              </LineWrapper>
              <LineWrapper>
              finishSeat: 
              <select name='finishSeat' value={form.finishSeat} onChange={onChange}>
              <option></option>
              <option>100</option>
              </select>
              </LineWrapper>
              <button>확인</button>
            </form>
          </AdminBoxWrapper>
        </AdminBox>
      </>
    );
};

export default AdminForm;
