import Image from 'next/image';

const Logo = () => {
    return <Image className='bg-white' src={'/miniu-logo-2.svg'} alt={'logo'} width={50} height={50} />;
};

export default Logo;
