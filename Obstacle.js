class Obstacle
{
    constructor(posX)
    {
        this.sptx = posX;
        this.spty = height - random([220, 420, 620]);
        this.spt = createSprite(this.sptx, this.spty);
        this.spt.shapeColor = "green";   
        this.spt.addAnimation("obstacle", obstacleAnimation);
        this.spt.scale = 0.03;
        this.spt.velocityX = -3;
    }
}