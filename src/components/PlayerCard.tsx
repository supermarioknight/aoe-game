import { Player } from "../interfaces/Player.interface"

type Props = {
    player: Player;
}
export function PlayerCard({ player }: Props) {
    return <div id="player-card" className="w-60 border p-3 rounded-md shadow-md">
        <li>{player.realName}</li>
        <li>{player.playerName}</li>
        <li>{player.asset}</li>
    </div>
}