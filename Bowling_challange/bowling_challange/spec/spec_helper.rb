


ENV['RACK_ENV'] = 'test'
ENV[ 'DATABASE' ] = 'test'
# Bring in the contents of the app.rb file. the below equivalent to require_relative
require File.join(File.dirname(__FILE__), '..', 'app.rb')


# Require the gems
require 'capybara'
require 'capybara/rspec'
require 'rspec'
require 'connect_and_clear_db'

# Tell capbara to talk to BookmarkManager
Capybara.app = 


RSpec.configure do |config|

  config.expect_with :rspec do |expectations|

    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  # rspec-mocks config goes here. You can use an alternate test double
  # library (such as bogus or mocha) by changing the `mock_with` option here.
  config.mock_with :rspec do |mocks|

    mocks.verify_partial_doubles = true
  end


  config.shared_context_metadata_behavior = :apply_to_host_groups


  config.profile_examples = 10

  config.order = :random

  Kernel.srand config.seed
=end
end
