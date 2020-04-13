import React, { useEffect, useState } from "react";
import AdminForm from "../../components/admin/AdminForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeField, adminInsertData } from "../../modules/admin";
import { movieData } from "../../modules/movie";

const AdminContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [error, setError] = useState();
  const { user, form, movie } = useSelector(({ user, admin, movie }) => ({
    user: user.user,
    form: admin.pushData,
    movie: movie.movieAllData
  }));

  useEffect(()=>{
    dispatch(movieData());
  },[dispatch])
  
  useEffect(() => {
    try {
      if (url.includes("/admin") && user.role === "user") {
        history.push("/");
      }
    } catch (error) {
      history.push("/");
    }
  }, [user.role, url, history]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "pushData",
        key: name,
        value,
      })
    );
  }

  const onSubmit = e => {
    e.preventDefault();
    const { movieId, price, totalSeat, finishSeat, movieDate } = form;
    if([movieId, price, totalSeat, finishSeat, movieDate].includes('')){
        setError('빈 공간을 입력해 주세요...')
        return;
    }
    dispatch(adminInsertData({
      movieId,
      price,
      seat: {
        totalSeat,
        finishSeat,
        movieDate,
      },
    }));
  }
  return <AdminForm 
  form={form}
        error={error} 
        onChange={onChange} 
        onSubmit={onSubmit}
        movie={movie}
        />;
};

export default AdminContainer;
