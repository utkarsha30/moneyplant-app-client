export interface ExpertData {
  _id: string;
  name: string;
  email: string;
  rating: {
    totalRating: number;

    totalReviews: number;
  };
  location: {
    city: string;
    state: string;
  };
  experience: number;
  specialization: string;
  university: string;
  fee: number;
  mobileNumber: string;
  profilepic: string;
  bio: string;
  state: string;
}
