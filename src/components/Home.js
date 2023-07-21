import React from 'react'
import { styled  } from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { moviesData } from '../movieData';
import {useSelector,useDispatch} from "react-redux";
import db from '../firebase';
import { setMovies } from '../features/movies/movieSlice';
import { selectUserName } from '../features/user/userSlice';

 

function Home(props) {
  const dispatch=useDispatch()
  const userName=useSelector(selectUserName);
  let originals=[];
  let recommends=[];
  let trending=[];
  let newDisneys=[];

  // React.useEffect(()=>{ moviesData.map((movie)=>{
  //   switch (movie.type) {
  //     case "recommend":
  //       recommends = [...recommends, { id: movie.id, ...movie }];
  //       break;

  //     case "new":
  //       newDisneys = [...newDisneys, { id: movie.id, ...movie }];
  //       break;

  //     case "original":
  //       originals = [...originals, { id: movie.id, ...movie }];
  //       break;

  //     case "trending":
  //       trending = [...trending, { id: movie.id, ...movie }];
  //       break;
  //   }

  //   dispatch(
  //           setMovies({
  //             recommend: recommends,
  //             newDisney: newDisneys,
  //             original: originals,
  //             trending: trending,
  //           })
  //         );
  // })},[userName]) 

 

  React.useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends/>
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 100px);
  overflow-x: hidden;
  
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  ${'' /* oveflow:visible; */}

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home