type City = {
  created_at: string;
  description: string;
  hotel: Hotel[];
  id: number;
  name: string;
  places: Places[];
};

type Comment = {
  created_at: string;
  id: number;
  post: Post;
  post_id: number;
  text: string;
  user: User;
  user_id: number;
};

type Hotel = {
  city: City;
  city_id: number;
  created_at: string;
  description: string;
  id: number;
  name: string;
  place_id: number;
  places: Places;
};

type Moderator = {
  created_at: string;
  id: number;
  role: string;
  user: User;
  user_id: number;
};

type Places = {
  city: City;
  city_id: number;
  created_at: string;
  description: string;
  hotel: Hotel[];
  id: number;
  name: string;
  post: Post[];
};

type Post = {
  comment: Comment[];
  created_at: string;
  description: string;
  end: string;
  id: number;
  image: string;
  place_id: number;
  places: Places;
  start: string;
  title: string;
  user: User;
  user_id: number;
  vote: Vote[];
};

type User = {
  comment: Comment[];
  created_at: string;
  email: String;
  first_Name: String;
  id: number;
  last_Name: String;
  moderator: Moderator[];

  password: String;
  phone_num: Float;
  post: Post[];
  username: String;
  vote: Vote[];
};

type Vote = {
  created_at: string;
  id: number;
  post: Post;
  post_id: number;
  upvote: Boolean;
  user: User;
  user_id: number;
};
