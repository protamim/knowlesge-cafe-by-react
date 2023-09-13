import headerImg from '../../assets/images/profile.png'

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center py-4 border-b-2 border-b-gray-300'>
                <h3 className='text-3xl font-bold'>Knowledge Cafe</h3>
                <div>
                    <img src={headerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;