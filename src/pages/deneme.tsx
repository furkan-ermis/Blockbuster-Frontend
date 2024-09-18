import { Movie } from "models/movie.model";
import React, { useEffect, useState } from "react";
import { fetchMovieDetails, imageBasePath } from "../services/movie.service";

type State = {
  movie: Movie | null;
};

function Deneme() {
  const [state, setState] = useState<State>({ movie: null });

  const loadDataAsync = async () => {
    try {
      const response = await fetchMovieDetails(11);
      console.log(response.data);
      setState({ movie: response.data });
    } catch (error) {
      console.error("Veri yüklenirken bir hata oluştu", error);
    }
  };

  useEffect(() => {
    loadDataAsync();
  }, []); // Bileşen yüklendiğinde veriyi getir

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Başlık</th>
            <th>resim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.movie?.title || "Yükleniyor..."}</td>
            <td>
              <img src={imageBasePath + state.movie?.poster_path} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Deneme;
