interface InformationsProps {
  name: string
  time: string
  difficulty: string
}

function Informations({ name, time, difficulty }: InformationsProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{`Difficulté : ${difficulty}`}</p>
      <p>{`Temps : ${time}`}</p>
    </div>
  );
}

export default Informations;
