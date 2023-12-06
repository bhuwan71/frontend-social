// store/sagas.ts
import { all } from 'redux-saga/effects';
// import yourSagas from './yourSagas'; // Import your individual sagas

export default function* rootSaga() {
  yield all([
    // yourSagas()
]); // Use all to run multiple sagas
}
