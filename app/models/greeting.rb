class Greeting < ApplicationRecord
  # Validation
  validates :greeting, presence: true

  def random_greeting
    @greetings = Greeting.all.sample.greeting
  end
end
