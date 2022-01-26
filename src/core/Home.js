import React, { useState, useEffect } from 'react'
import Base from './Base'
import Card from './Card'
import getBattles, { searchBattle } from './helper/coreapicalls'


export default function Home() {

    const [battles, setBattles] = useState([]);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const loadAllBattles = () => {
        getBattles().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setBattles(data)
            }
        })
    }

    useEffect(() => {
        loadAllBattles();
    }, []);

    return (
        <Base>
            <div class="input-group mb-1">
                <input onChange={(e) => setSearchQuery(e.target.value)} id="search" type="text" className="form-control" placeholder="Search Battle Name" aria-label="battle name" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className='row'>
                {battles.filter((battle) => {
                    if (searchQuery === "") {
                        return battle
                    } else if (battle.battle_name.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return battle
                    }
                })
                    .map((battle, index) => {
                        return (
                            <div key={index} className='col-4 mb-4 p-4'>
                                <Card battle={battle} />

                            </div>
                        )
                    })}
            </div>
        </Base>
    )
}