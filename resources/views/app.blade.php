<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <style>
      .card::-webkit-scrollbar {
        display: none;
      }
      .second{
        text-align:right;
      }
      .left{
        background-color: #eef;
      }
      .right{
        background-color: #efe;
      }
      @media(max-width:900px) {
        .first{
          order: 1;
        }
        .second{
          order:2;
          text-align:left;
        }
      }
    </style>
  </head>
  <body>
    @inertia
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>