import { Player } from "../interfaces/Player.interface"

type Props = {
    player: Player;
}
export function PlayerCard({ player }: Props) {
    return <div id="player-card" className="w-60 border p-3">
        <p>{player.realName}</p>
        <p>{player.playerName}</p>
        <p>{player.asset}</p>
    </div>
}