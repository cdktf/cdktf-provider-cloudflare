# `customSsl` Submodule <a name="`customSsl` Submodule" id="@cdktf/provider-cloudflare.customSsl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomSsl <a name="CustomSsl" id="@cdktf/provider-cloudflare.customSsl.CustomSsl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl cloudflare_custom_ssl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSsl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  custom_ssl_options: CustomSslCustomSslOptions = None,
  custom_ssl_priority: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.customSslOptions">custom_ssl_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | custom_ssl_options block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.customSslPriority">custom_ssl_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]</code> | custom_ssl_priority block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}

---

##### `custom_ssl_options`<sup>Optional</sup> <a name="custom_ssl_options" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.customSslOptions"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

custom_ssl_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#custom_ssl_options CustomSsl#custom_ssl_options}

---

##### `custom_ssl_priority`<sup>Optional</sup> <a name="custom_ssl_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.customSslPriority"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]

custom_ssl_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#custom_ssl_priority CustomSsl#custom_ssl_priority}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions">put_custom_ssl_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority">put_custom_ssl_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslOptions">reset_custom_ssl_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslPriority">reset_custom_ssl_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_ssl_options` <a name="put_custom_ssl_options" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions"></a>

```python
def put_custom_ssl_options(
  bundle_method: str = None,
  certificate: str = None,
  geo_restrictions: str = None,
  private_key: str = None,
  type: str = None
) -> None
```

###### `bundle_method`<sup>Optional</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.bundleMethod"></a>

- *Type:* str

Method of building intermediate certificate chain.

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it. Available values: `ubiquitous`, `optimal`, `force`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.certificate"></a>

- *Type:* str

Certificate certificate and the intermediate(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}

---

###### `geo_restrictions`<sup>Optional</sup> <a name="geo_restrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.geoRestrictions"></a>

- *Type:* str

Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.privateKey"></a>

- *Type:* str

Certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.type"></a>

- *Type:* str

Whether to enable support for legacy clients which do not include SNI in the TLS handshake.

Available values: `legacy_custom`, `sni_custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#type CustomSsl#type}

---

##### `put_custom_ssl_priority` <a name="put_custom_ssl_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority"></a>

```python
def put_custom_ssl_priority(
  value: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]

---

##### `reset_custom_ssl_options` <a name="reset_custom_ssl_options" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslOptions"></a>

```python
def reset_custom_ssl_options() -> None
```

##### `reset_custom_ssl_priority` <a name="reset_custom_ssl_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslPriority"></a>

```python
def reset_custom_ssl_priority() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSsl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSsl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSsl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSsl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomSsl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomSsl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomSsl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptions">custom_ssl_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference">CustomSslCustomSslOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriority">custom_ssl_priority</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList">CustomSslCustomSslPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.uploadedOn">uploaded_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptionsInput">custom_ssl_options_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriorityInput">custom_ssl_priority_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_ssl_options`<sup>Required</sup> <a name="custom_ssl_options" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptions"></a>

```python
custom_ssl_options: CustomSslCustomSslOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference">CustomSslCustomSslOptionsOutputReference</a>

---

##### `custom_ssl_priority`<sup>Required</sup> <a name="custom_ssl_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriority"></a>

```python
custom_ssl_priority: CustomSslCustomSslPriorityList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList">CustomSslCustomSslPriorityList</a>

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uploaded_on`<sup>Required</sup> <a name="uploaded_on" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.uploadedOn"></a>

```python
uploaded_on: str
```

- *Type:* str

---

##### `custom_ssl_options_input`<sup>Optional</sup> <a name="custom_ssl_options_input" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptionsInput"></a>

```python
custom_ssl_options_input: CustomSslCustomSslOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

---

##### `custom_ssl_priority_input`<sup>Optional</sup> <a name="custom_ssl_priority_input" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriorityInput"></a>

```python
custom_ssl_priority_input: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomSslConfig <a name="CustomSslConfig" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  custom_ssl_options: CustomSslCustomSslOptions = None,
  custom_ssl_priority: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslOptions">custom_ssl_options</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | custom_ssl_options block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslPriority">custom_ssl_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]</code> | custom_ssl_priority block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}

---

##### `custom_ssl_options`<sup>Optional</sup> <a name="custom_ssl_options" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslOptions"></a>

```python
custom_ssl_options: CustomSslCustomSslOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

custom_ssl_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#custom_ssl_options CustomSsl#custom_ssl_options}

---

##### `custom_ssl_priority`<sup>Optional</sup> <a name="custom_ssl_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslPriority"></a>

```python
custom_ssl_priority: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]

custom_ssl_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#custom_ssl_priority CustomSsl#custom_ssl_priority}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CustomSslCustomSslOptions <a name="CustomSslCustomSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslCustomSslOptions(
  bundle_method: str = None,
  certificate: str = None,
  geo_restrictions: str = None,
  private_key: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.bundleMethod">bundle_method</a></code> | <code>str</code> | Method of building intermediate certificate chain. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.certificate">certificate</a></code> | <code>str</code> | Certificate certificate and the intermediate(s). |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.geoRestrictions">geo_restrictions</a></code> | <code>str</code> | Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.privateKey">private_key</a></code> | <code>str</code> | Certificate's private key. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.type">type</a></code> | <code>str</code> | Whether to enable support for legacy clients which do not include SNI in the TLS handshake. |

---

##### `bundle_method`<sup>Optional</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

Method of building intermediate certificate chain.

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it. Available values: `ubiquitous`, `optimal`, `force`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Certificate certificate and the intermediate(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}

---

##### `geo_restrictions`<sup>Optional</sup> <a name="geo_restrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.geoRestrictions"></a>

```python
geo_restrictions: str
```

- *Type:* str

Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Whether to enable support for legacy clients which do not include SNI in the TLS handshake.

Available values: `legacy_custom`, `sni_custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#type CustomSsl#type}

---

### CustomSslCustomSslPriority <a name="CustomSslCustomSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslCustomSslPriority(
  id: str = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#priority CustomSsl#priority}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#id CustomSsl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/custom_ssl#priority CustomSsl#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomSslCustomSslOptionsOutputReference <a name="CustomSslCustomSslOptionsOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslCustomSslOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetBundleMethod">reset_bundle_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetGeoRestrictions">reset_geo_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bundle_method` <a name="reset_bundle_method" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetBundleMethod"></a>

```python
def reset_bundle_method() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_geo_restrictions` <a name="reset_geo_restrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetGeoRestrictions"></a>

```python
def reset_geo_restrictions() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethodInput">bundle_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictionsInput">geo_restrictions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethod">bundle_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictions">geo_restrictions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_method_input`<sup>Optional</sup> <a name="bundle_method_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethodInput"></a>

```python
bundle_method_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `geo_restrictions_input`<sup>Optional</sup> <a name="geo_restrictions_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictionsInput"></a>

```python
geo_restrictions_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bundle_method`<sup>Required</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `geo_restrictions`<sup>Required</sup> <a name="geo_restrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictions"></a>

```python
geo_restrictions: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CustomSslCustomSslOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

---


### CustomSslCustomSslPriorityList <a name="CustomSslCustomSslPriorityList" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslCustomSslPriorityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomSslCustomSslPriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CustomSslCustomSslPriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]]

---


### CustomSslCustomSslPriorityOutputReference <a name="CustomSslCustomSslPriorityOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import custom_ssl

customSsl.CustomSslCustomSslPriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomSslCustomSslPriority]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>]

---



