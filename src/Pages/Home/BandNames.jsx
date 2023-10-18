

const BandNames = ({band}) => {
    const {name, image} = band;
    return (
        <div>
            <div className="card card-side  shadow-x   bg-slate-900 text-emerald-500 ">
  <figure className="border-emerald-500 border-2"><img className="w-60 h-40" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>

  </div>
</div>
        </div>
    );
};

export default BandNames;