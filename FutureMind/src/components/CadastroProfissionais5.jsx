import { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 
import { Portuguese } from "flatpickr/dist/l10n/pt"; 
import { GlobalContext } from "../GlobalContext/GlobalContext";

function CadastroProfissionais5() {

  const { profissional } = useContext(GlobalContext);
  const [name, setName] = useState(profissional.nome_completo);
  const [date, setDate] = useState(profissional.data_nascimento); 


  useEffect(() => {

    profissional.data_nascimento = date;
  }, [date]);

  useEffect(() => {

    profissional.nome_completo = name;
  }, [name]);

    return (
      <div className="selecao1">
      
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">Nome Completo</label><input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="file"className="inputCRP" />
    </div>
    <div className="input-text">
      <label htmlFor="">Data de Nascimento</label>
      <Flatpickr
            options={{
              locale: Portuguese, // Configuração para Português
              dateFormat: "d/m/Y", // Formato da data
              defaultDate: "today", // Data padrão
            }}
            value={date} // Data atual no estado
            onChange={(selectedDates) => setDate(selectedDates[0])} // Atualiza a data selecionada
            className="inputCRP" // Classe CSS
          />
    </div>
      </div>
    </div>
    )
  }
  
  
  
  export default CadastroProfissionais5