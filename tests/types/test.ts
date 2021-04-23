import { ITeam } from '.';

const team1: ITeam = null; // $ExpectError
const team2: ITeam = { iconUrl: '', id: '', name: '', channels: [] }; // $ExpectType ITeam
