
\c groupi3db

DELETE FROM events;
DELETE FROM artists; 
DELETE FROM users;
DELETE FROM comments;

INSERT INTO artists
  (name, genre)
VALUES
  ('The Good Few', 'Rock'),
  ('Madonna', 'Pop'),
  ('Sam Smith', 'Pop'),
  ('Metallica', 'Rock'),
  ('Maroon 5', 'Pop'),
  ('Calvin Harris', 'EDM'),
  ('Drake', 'Rap');

INSERT INTO events (artist_id, date, artist_name, venue, address, ticket_link)
VALUES 
  (
   1,
  '6-28-2018', 
  'The Good Few', 
  'Knitting Factory', 
  '361 Metropolitan Ave, Brooklyn, NY 11211', 
  'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.ticketweb.com%2Fevent%2Fthe-good-few-daisy-the-knitting-factory-brooklyn-tickets%2F8368445%3FREFERRAL_ID%3Dtwfb&h=AT2W5BqtUqB8YG8O27wLHAP4gGDQjx5FXlawgKiJO2fUNmFapvditH1ooDMI3tabrmUdCE57xZJHFUE2eU5tfyz4X3u7bCjjAYXPRgdPeWnlQsO6zLTVvQUPvw1uY8GSozPsSgs&s=1'
  ),
  (
    2,
    '6-29-2018',
    'Madonna',
    'Barclays Center',
    '620 Atlantic Ave, Brooklyn, NY 11217',
    'https://www.instagram.com/madonna/'
  ), 
(
  3,
    '6-30-2018',
    'Sam Smith',
    'Madison Square Garden',
    '4 Pennsylvania Plaza, New York, NY 10001',
    'http://garden-ny.com/madisonsquare//Events.php?search_text=sam+smith+madison+square+garden&gclid=CjwKCAjwma3ZBRBwEiwA-CsblOvqD77OyohqmgfDL2nBf7gFrn9F0tXu4pATryEfkaZjSNjLYcwTtxoCP5kQAvD_BwE'
),
(
  4,
  '10-12-2018',
  'Metallica',
  'Zilker Metropolitan Park',
  '2100 Barton Springs Rd, Austin, TX 78704',
  'https://www.aclfestival.com/tickets/'
),
(
  5, 
  '10-6-2018', 
  'Maroon 5', 
  'Prudential Center', 
  '25 Lafayette Street,  Newark,  NJ  07102', 
  'https://www.ticketmaster.com/artist/824144?dma_id=345&landing=c&awtrc=true&c=SEM_TPM_ggl_1011423257_51399712762_maroon%25205%2520tickets&GCID=0&gclid=CjwKCAjwma3ZBRBwEiwA-CsblMHUfkRtfL5B_Bp5V4RM5oY5nEYGrqlHxT12bhpm7Ok6ZPhqbRoppRoCmaoQAvD_BwE&gclsrc=aw.ds&dclid=CPSg-IqN5dsCFY5BNwodfiMPiw'
),
(
  6, 
  '7-11-2018', 
  'Calvin Harris', 
  'Barclay Center', 
  '620 Atlantic Ave, Brooklyn, NY 11217', 
  'https://www.ticketmaster.com/Calvin-Harris-tickets/artist/1444103?tm_link=artist_artistvenue_module'
  ),
(
  7, 
  '8-24-2018', 
  'Drake', 
  'Madison Sqaure Garden', 
  'New York, NY', 
  'https://bit.ly/2lsDykt'
);


INSERT INTO users (username, password_digest)
VALUES 
('jes', 'test'),
('dan','test'),
('joel','test');
;

INSERT INTO comments (user_id, content)
VALUES 
(1, 'Cool artist'),
(2, 'Great artist'),
(3, 'Awesome artist');