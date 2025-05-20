# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktf/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariants(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  value: ZoneCacheVariantsValue,
  zone_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue">put_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_value` <a name="put_value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue"></a>

```python
def put_value(
  avif: typing.List[str] = None,
  bmp: typing.List[str] = None,
  gif: typing.List[str] = None,
  jp2: typing.List[str] = None,
  jpeg: typing.List[str] = None,
  jpg: typing.List[str] = None,
  jpg2: typing.List[str] = None,
  png: typing.List[str] = None,
  tif: typing.List[str] = None,
  tiff: typing.List[str] = None,
  webp: typing.List[str] = None
) -> None
```

###### `avif`<sup>Optional</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.avif"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

###### `bmp`<sup>Optional</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.bmp"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

###### `gif`<sup>Optional</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.gif"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

###### `jp2`<sup>Optional</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.jp2"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

###### `jpeg`<sup>Optional</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.jpeg"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

###### `jpg`<sup>Optional</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.jpg"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

###### `jpg2`<sup>Optional</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.jpg2"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

###### `png`<sup>Optional</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.png"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

###### `tif`<sup>Optional</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.tif"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

###### `tiff`<sup>Optional</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.tiff"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

###### `webp`<sup>Optional</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.webp"></a>

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariants.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariants.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariants.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariants.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable">editable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `editable`<sup>Required</sup> <a name="editable" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable"></a>

```python
editable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value"></a>

```python
value: ZoneCacheVariantsValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, ZoneCacheVariantsValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariantsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  value: ZoneCacheVariantsValue,
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value">value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value"></a>

```python
value: ZoneCacheVariantsValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

### ZoneCacheVariantsValue <a name="ZoneCacheVariantsValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariantsValue(
  avif: typing.List[str] = None,
  bmp: typing.List[str] = None,
  gif: typing.List[str] = None,
  jp2: typing.List[str] = None,
  jpeg: typing.List[str] = None,
  jpg: typing.List[str] = None,
  jpg2: typing.List[str] = None,
  png: typing.List[str] = None,
  tif: typing.List[str] = None,
  tiff: typing.List[str] = None,
  webp: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif">avif</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp">bmp</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif">gif</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2">jp2</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg">jpeg</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg">jpg</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2">jpg2</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png">png</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif">tif</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff">tiff</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp">webp</a></code> | <code>typing.List[str]</code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `avif`<sup>Optional</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif"></a>

```python
avif: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `bmp`<sup>Optional</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp"></a>

```python
bmp: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `gif`<sup>Optional</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif"></a>

```python
gif: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `jp2`<sup>Optional</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2"></a>

```python
jp2: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `jpeg`<sup>Optional</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg"></a>

```python
jpeg: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `jpg`<sup>Optional</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg"></a>

```python
jpg: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `jpg2`<sup>Optional</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2"></a>

```python
jpg2: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `png`<sup>Optional</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png"></a>

```python
png: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `tif`<sup>Optional</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif"></a>

```python
tif: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `tiff`<sup>Optional</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff"></a>

```python
tiff: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `webp`<sup>Optional</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp"></a>

```python
webp: typing.List[str]
```

- *Type:* typing.List[str]

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneCacheVariantsValueOutputReference <a name="ZoneCacheVariantsValueOutputReference" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zone_cache_variants

zoneCacheVariants.ZoneCacheVariantsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif">reset_avif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp">reset_bmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif">reset_gif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2">reset_jp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg">reset_jpeg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg">reset_jpg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2">reset_jpg2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng">reset_png</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif">reset_tif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff">reset_tiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp">reset_webp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_avif` <a name="reset_avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif"></a>

```python
def reset_avif() -> None
```

##### `reset_bmp` <a name="reset_bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp"></a>

```python
def reset_bmp() -> None
```

##### `reset_gif` <a name="reset_gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif"></a>

```python
def reset_gif() -> None
```

##### `reset_jp2` <a name="reset_jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2"></a>

```python
def reset_jp2() -> None
```

##### `reset_jpeg` <a name="reset_jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg"></a>

```python
def reset_jpeg() -> None
```

##### `reset_jpg` <a name="reset_jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg"></a>

```python
def reset_jpg() -> None
```

##### `reset_jpg2` <a name="reset_jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2"></a>

```python
def reset_jpg2() -> None
```

##### `reset_png` <a name="reset_png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng"></a>

```python
def reset_png() -> None
```

##### `reset_tif` <a name="reset_tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif"></a>

```python
def reset_tif() -> None
```

##### `reset_tiff` <a name="reset_tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff"></a>

```python
def reset_tiff() -> None
```

##### `reset_webp` <a name="reset_webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp"></a>

```python
def reset_webp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput">avif_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput">bmp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput">gif_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input">jp2_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput">jpeg_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input">jpg2_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput">jpg_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput">png_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput">tiff_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput">tif_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput">webp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif">avif</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp">bmp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif">gif</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2">jp2</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg">jpeg</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg">jpg</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2">jpg2</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png">png</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif">tif</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff">tiff</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp">webp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avif_input`<sup>Optional</sup> <a name="avif_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput"></a>

```python
avif_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bmp_input`<sup>Optional</sup> <a name="bmp_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput"></a>

```python
bmp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gif_input`<sup>Optional</sup> <a name="gif_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput"></a>

```python
gif_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jp2_input`<sup>Optional</sup> <a name="jp2_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input"></a>

```python
jp2_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpeg_input`<sup>Optional</sup> <a name="jpeg_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput"></a>

```python
jpeg_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpg2_input`<sup>Optional</sup> <a name="jpg2_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input"></a>

```python
jpg2_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpg_input`<sup>Optional</sup> <a name="jpg_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput"></a>

```python
jpg_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `png_input`<sup>Optional</sup> <a name="png_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput"></a>

```python
png_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tiff_input`<sup>Optional</sup> <a name="tiff_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput"></a>

```python
tiff_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tif_input`<sup>Optional</sup> <a name="tif_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput"></a>

```python
tif_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `webp_input`<sup>Optional</sup> <a name="webp_input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput"></a>

```python
webp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `avif`<sup>Required</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif"></a>

```python
avif: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bmp`<sup>Required</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp"></a>

```python
bmp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gif`<sup>Required</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif"></a>

```python
gif: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jp2`<sup>Required</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2"></a>

```python
jp2: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpeg`<sup>Required</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg"></a>

```python
jpeg: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpg`<sup>Required</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg"></a>

```python
jpg: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jpg2`<sup>Required</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2"></a>

```python
jpg2: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `png`<sup>Required</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png"></a>

```python
png: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tif`<sup>Required</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif"></a>

```python
tif: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tiff`<sup>Required</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff"></a>

```python
tiff: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp"></a>

```python
webp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZoneCacheVariantsValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>]

---



