import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

export default function HeaderForm() {

    const {register, handleSubmit, reset} = useForm({mode: `all`})

    let [cat, setCat] = useState({});
    let [dog, setDog] = useState({});

    useEffect(() => {
    }, []);


    function dogSubmit() {

    }

    function catSubmit() {

    }

    return (<div>
            <form onSubmit={handleSubmit(dogSubmit)}>
               Add Dog: <input type="text" placeholder={'dog'} {...register('dog')}/>
                <button>Save</button>
            </form>
            <form onSubmit={handleSubmit(catSubmit)}>
               Add Cat: <input type="text" placeholder={'cat'} {...register('cat')}/>
                <button>Save</button>
            </form>
            <hr/>
        </div>
    );
}