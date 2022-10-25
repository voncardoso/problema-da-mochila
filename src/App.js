import { useEffect } from "react";
import { useState } from "react";
import texte from "./texte/cameras.txt";
function App() {
  const [data, setData] = useState([]);
  const [data1, setdata1] = useState([]);
  let vectorPosition1000 = [];
  let vectorPosition2000 = [];
  let indexvactor = 0;
  let indexvactor1 = 0;
  let count = 0;
  let count1 = 0;
  let arrayNumeroAleatorio = [];
  let resultPosition = [];
  let countTeste = 0;
  let countArray1 = [];

  // pegando o arquivo txt
  useEffect(() => {
    fetch(texte)
      .then((response) => response.text())
      .then((text) => {
        setData(text.split("\n"));
      });
  }, []);

  function handleclick(e) {
    //  e.preventDefault();

    // tranforma o arquivo txt
    if (data1.length === 0) {
      data.map((item) => {
        data1.push(item.split(","));
      });
    }

    for (let i = 0; i < 1000; i++) {
      if (vectorPosition1000.length < 1000) {
        indexvactor = Math.ceil(Math.random() * (200 - 0) + 0);

        let resultNumberAleatorio = arrayNumeroAleatorio.filter(
          (item, index) => item === indexvactor
        );

        if (resultNumberAleatorio.length === 0) {
          arrayNumeroAleatorio.push(indexvactor);
          //  console.log(indexvactor);
          count = count + 1;

          resultPosition.push(count);
          data1.map((item, index) => {
            if (indexvactor === index + 1) {
              item.map((item2) => {
                let result = vectorPosition1000.filter(
                  (item) => item === item2
                );

                //  console.log(result);

                if (result.length === 0 && vectorPosition1000.length <= 999) {
                  vectorPosition1000.push(item2);
                }
              });
            }
          });
        }
      } else {
      }
    }
    // console.log("arrayNumeroAleatorio", arrayNumeroAleatorio);
    // console.log("count 100", count);
    nextSoluction(arrayNumeroAleatorio, data1);
    countTeste = nextSoluction(arrayNumeroAleatorio, data1);
    //  console.log("vectorPosition10002", vectorPosition1000);
    vectorPosition1000 = [];
    arrayNumeroAleatorio = [];
    count = 0;
    return;
  }

  function nextSoluction(array, data) {
    console.log("interação");
    for (let i = 0; i <= 25; i++) {
      indexvactor1 = Math.ceil(Math.random() * (200 - 0) + 0);

      const index23 = array.findIndex((event) => event === indexvactor);

      let teste = array.filter((item) => item === indexvactor1);

      if (teste.length === 0) {
        array.push(indexvactor1);
      } else if (teste.length >= 1) {
        array.splice(index23, 1);
      }
      if (vectorPosition2000.length < 1000) {
        //  console.log(indexvactor);

        array.map((item) => {
          data.map((item2, index) => {
            if (item === index && vectorPosition2000.length < 1000) {
              //   console.log(item2, index);
              count1 = count1 + 1;
              countTeste = count1;
              item2.map((teste1) => {
                //     console.log(teste1);
                let filtro = vectorPosition2000.filter((fff) => fff === teste1);

                if (filtro === 0) {
                  vectorPosition2000.push(teste1);
                }
              });
            }
          });
        }, []);
      } else {
      }
      console.log(count1);
      countArray1.push(count1);

      vectorPosition2000 = [];
      count1 = 0;
    }
  }

  console.log("countArray1", countTeste);

  return (
    <div className="App">
      <h1>trabalho de IA</h1>
      <div style={{ overflowY: "scroll" }}>
        resultado:{" "}
        {countArray1.map((item) => {
          return <p>{item}</p>;
        })}
        <button onClick={handleclick}>Gerar</button>
      </div>
    </div>
  );
}

export default App;
