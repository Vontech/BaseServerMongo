import mongoose from 'mongoose';
import Users from './users.model';

const TokenSchema = new mongoose.Schema({
  accessToken: { type: String },
  accessTokenExpiresOn: { type: Date },
  client : { type: Object },  // `client` and `user` are required in multiple places, for example `getAccessToken()`
  clientId: { type: String },
  refreshToken: { type: String },
  refreshTokenExpiresOn: { type: Date },
  user : { type: Users.schema },
  userId: { type: String },
});

const Tokens = mongoose.model('Tokens', TokenSchema);

export default Tokens;