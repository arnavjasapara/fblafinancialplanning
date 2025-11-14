/*
  # Financial Planning App Database Schema

  1. New Tables
    - `scenarios`
      - `id` (uuid, primary key)
      - `name` (text) - Client name
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `budget_items`
      - `id` (uuid, primary key)
      - `scenario_id` (uuid, foreign key)
      - `category` (text)
      - `amount` (decimal)
      - `date` (date)
      - `description` (text)
    
    - `recommendations`
      - `id` (uuid, primary key)
      - `scenario_id` (uuid, foreign key)
      - `category` (text) - budgeting, debt, investment, retirement, etc.
      - `recommendation` (text)
      - `priority` (integer)
      - `created_at` (timestamptz)
    
    - `presentation_notes`
      - `id` (uuid, primary key)
      - `scenario_id` (uuid, foreign key)
      - `section` (text) - corresponds to scoring rubric sections
      - `notes` (text)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public access (since this is a competition prep tool)
*/

CREATE TABLE IF NOT EXISTS scenarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS budget_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario_id uuid REFERENCES scenarios(id) ON DELETE CASCADE,
  category text NOT NULL DEFAULT '',
  amount decimal(10,2) NOT NULL DEFAULT 0,
  date date DEFAULT CURRENT_DATE,
  description text DEFAULT ''
);

CREATE TABLE IF NOT EXISTS recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario_id uuid REFERENCES scenarios(id) ON DELETE CASCADE,
  category text NOT NULL DEFAULT '',
  recommendation text NOT NULL DEFAULT '',
  priority integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS presentation_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario_id uuid REFERENCES scenarios(id) ON DELETE CASCADE,
  section text NOT NULL DEFAULT '',
  notes text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE budget_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE presentation_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to scenarios"
  ON scenarios FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to scenarios"
  ON scenarios FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to scenarios"
  ON scenarios FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from scenarios"
  ON scenarios FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Allow public read access to budget_items"
  ON budget_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to budget_items"
  ON budget_items FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to budget_items"
  ON budget_items FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from budget_items"
  ON budget_items FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Allow public read access to recommendations"
  ON recommendations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to recommendations"
  ON recommendations FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to recommendations"
  ON recommendations FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from recommendations"
  ON recommendations FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Allow public read access to presentation_notes"
  ON presentation_notes FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to presentation_notes"
  ON presentation_notes FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to presentation_notes"
  ON presentation_notes FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from presentation_notes"
  ON presentation_notes FOR DELETE
  TO public
  USING (true);