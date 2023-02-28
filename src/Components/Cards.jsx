
export const Cards = ({img, name, status, 
    location, species}) => {
    const classStatus = status === 'Alive' ? 'alive' : 'dead'
    return(
        <article className='card-container'>
         <img src={img}/>
         <div className='card-information'>
         <h1>{name}</h1>
         <div className='status-container'>
         <span className={classStatus}>.</span><p>{status}</p>
         </div>
         <p className='information'>Last known location:</p>
         <p>{location}</p>
         <p className='information'>Specie:</p>
         <p>{species}</p>
        </div>
        </article>
    )
}
