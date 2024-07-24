import { useEffect, useState } from 'react'
import { Player } from './interfaces/Player.interface';
import { fetchPlayers } from './services/playerService';
import { DetailsCard } from './components/DetailsCard';
import { Controls } from './components/Controls';
import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { PlayerCard } from './components/PlayerCard.tsx';


function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetchPlayers().then(res => {
      console.log(res);
      setPlayers(res)
    });
  }, []);

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    const sortedPlayers = [...players].sort((a, b) => {
      if (order === 'asc') {
        return a.realName.localeCompare(b.realName);
      } else {
        return b.realName.localeCompare(a.realName);
      }
    });
    setPlayers(sortedPlayers);
  };

  const handleSubmit = () => {
    console.log('Submit clicked');
  };

  return (
    <div className='p-4'>

      <Row gutter={16}>
        <Col span={12}>
          <DetailsCard
            player={selectedPlayer}
          />
        </Col>
        <Col span={12}>
          <Controls />
        </Col>
      </Row>

      <div className='mt-4'>
        <Title level={2}>Overview</Title>

        <Row gutter={[16, 16]}>
          {players.map((player) => (
            <Col span={8} key={player.playerName}>
              <PlayerCard
                player={player}
                onClick={() => handlePlayerSelect(player)}
                isActive={player.playerName === selectedPlayer?.playerName}
              />
            </Col>
          ))}
        </Row>

      </div>
    </div>


  );
}

export default App
