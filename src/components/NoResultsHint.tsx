
export const NoResultsHint = ({ phrase }: { phrase: string }) => {
  return (
    <div className="col d-flex justify-content-center">
      <p className='m-0'>{`Brak wyników wyszukiwania dla: ${phrase}`}</p>
    </div>
  );
};