require 'rails_helper'

RSpec.describe Board, type: :model do
  let(:user1) { create(:user) }
  let(:workspace1) { create(:workspace, user_id: user1.id) }  
  it "board BL to workspace" do
    board1 = Board.create(name: "test board", workspace_id: workspace1.id)
    expect(board1).to eq(workspace1.boards.last)
  end
end