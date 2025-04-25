import Image from "next/image";

const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <div>
            <Image
                src={ icon }
                width={ 64 }
                height={ 64 }
                alt={ "icon" }
                className="w-16 h-16 object-contain"
            />
        </div>
    );
};
export default BallCanvas;
