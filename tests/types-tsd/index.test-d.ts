import { ITeam } from '.';
import { expectAssignable, expectNotAssignable } from 'tsd';

expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({
  iconUrl: '',
  id: '',
  name: '',
  channels: [],
});
