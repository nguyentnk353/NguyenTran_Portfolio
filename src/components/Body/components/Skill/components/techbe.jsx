const techbe = (t) => {
  const icon = t?.icon;
  const name = t?.name;
  return (
    <div className='flex flex-col items-center'>
      <img src={icon} alt='Tech icon' className='h-[70px]' />
      <div className='mt-2 font-semibold text-center'>{name}</div>
    </div>
  );
};

export default techbe;
