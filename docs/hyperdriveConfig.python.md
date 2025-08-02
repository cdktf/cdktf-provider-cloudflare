# `hyperdriveConfig` Submodule <a name="`hyperdriveConfig` Submodule" id="@cdktf/provider-cloudflare.hyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyperdriveConfig <a name="HyperdriveConfig" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  origin: HyperdriveConfigOrigin,
  caching: HyperdriveConfigCaching = None,
  mtls: HyperdriveConfigMtls = None,
  origin_connection_limit: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#name HyperdriveConfig#name}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.originConnectionLimit">origin_connection_limit</a></code> | <code>typing.Union[int, float]</code> | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.accountId"></a>

- *Type:* str

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#name HyperdriveConfig#name}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.origin"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.caching"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.mtls"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}.

---

##### `origin_connection_limit`<sup>Optional</sup> <a name="origin_connection_limit" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.originConnectionLimit"></a>

- *Type:* typing.Union[int, float]

The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching">put_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls">put_mtls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin">put_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls">reset_mtls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit">reset_origin_connection_limit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_caching` <a name="put_caching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching"></a>

```python
def put_caching(
  disabled: typing.Union[bool, IResolvable] = None,
  max_age: typing.Union[int, float] = None,
  stale_while_revalidate: typing.Union[int, float] = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to disable caching of SQL responses. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}

---

###### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Specify the maximum duration items should persist in the cache. Not returned if set to the default (60).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}

---

###### `stale_while_revalidate`<sup>Optional</sup> <a name="stale_while_revalidate" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching.parameter.staleWhileRevalidate"></a>

- *Type:* typing.Union[int, float]

Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}

---

##### `put_mtls` <a name="put_mtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls"></a>

```python
def put_mtls(
  ca_certificate_id: str = None,
  mtls_certificate_id: str = None,
  sslmode: str = None
) -> None
```

###### `ca_certificate_id`<sup>Optional</sup> <a name="ca_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls.parameter.caCertificateId"></a>

- *Type:* str

Define CA certificate ID obtained after uploading CA cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}

---

###### `mtls_certificate_id`<sup>Optional</sup> <a name="mtls_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls.parameter.mtlsCertificateId"></a>

- *Type:* str

Define mTLS certificate ID obtained after uploading client cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}

---

###### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls.parameter.sslmode"></a>

- *Type:* str

Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}

---

##### `put_origin` <a name="put_origin" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin"></a>

```python
def put_origin(
  database: str,
  host: str,
  password: str,
  scheme: str,
  user: str,
  access_client_id: str = None,
  access_client_secret: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.database"></a>

- *Type:* str

Set the name of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#database HyperdriveConfig#database}

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.host"></a>

- *Type:* str

Defines the host (hostname or IP) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#host HyperdriveConfig#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.password"></a>

- *Type:* str

Set the password needed to access your origin database. The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#password HyperdriveConfig#password}

---

###### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.scheme"></a>

- *Type:* str

Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.user"></a>

- *Type:* str

Set the user of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#user HyperdriveConfig#user}

---

###### `access_client_id`<sup>Optional</sup> <a name="access_client_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.accessClientId"></a>

- *Type:* str

Defines the Client ID of the Access token to use when connecting to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}

---

###### `access_client_secret`<sup>Optional</sup> <a name="access_client_secret" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.accessClientSecret"></a>

- *Type:* str

Defines the Client Secret of the Access Token to use when connecting to the origin database.

The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.port"></a>

- *Type:* typing.Union[int, float]

Defines the port (default: 5432 for Postgres) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#port HyperdriveConfig#port}

---

##### `reset_caching` <a name="reset_caching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_mtls` <a name="reset_mtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls"></a>

```python
def reset_mtls() -> None
```

##### `reset_origin_connection_limit` <a name="reset_origin_connection_limit" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit"></a>

```python
def reset_origin_connection_limit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HyperdriveConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput">caching_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput">mtls_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput">origin_connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput">origin_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit">origin_connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching"></a>

```python
caching: HyperdriveConfigCachingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls"></a>

```python
mtls: HyperdriveConfigMtlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin"></a>

```python
origin: HyperdriveConfigOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput"></a>

```python
caching_input: typing.Union[IResolvable, HyperdriveConfigCaching]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>]

---

##### `mtls_input`<sup>Optional</sup> <a name="mtls_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput"></a>

```python
mtls_input: typing.Union[IResolvable, HyperdriveConfigMtls]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `origin_connection_limit_input`<sup>Optional</sup> <a name="origin_connection_limit_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput"></a>

```python
origin_connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput"></a>

```python
origin_input: typing.Union[IResolvable, HyperdriveConfigOrigin]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin_connection_limit`<sup>Required</sup> <a name="origin_connection_limit" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit"></a>

```python
origin_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HyperdriveConfigCaching <a name="HyperdriveConfigCaching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigCaching(
  disabled: typing.Union[bool, IResolvable] = None,
  max_age: typing.Union[int, float] = None,
  stale_while_revalidate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to disable caching of SQL responses. Default is false. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum duration items should persist in the cache. Not returned if set to the default (60). |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate">stale_while_revalidate</a></code> | <code>typing.Union[int, float]</code> | Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15). |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to disable caching of SQL responses. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the maximum duration items should persist in the cache. Not returned if set to the default (60).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}

---

##### `stale_while_revalidate`<sup>Optional</sup> <a name="stale_while_revalidate" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate"></a>

```python
stale_while_revalidate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}

---

### HyperdriveConfigConfig <a name="HyperdriveConfigConfig" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  origin: HyperdriveConfigOrigin,
  caching: HyperdriveConfigCaching = None,
  mtls: HyperdriveConfigMtls = None,
  origin_connection_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId">account_id</a></code> | <code>str</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#name HyperdriveConfig#name}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching">caching</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit">origin_connection_limit</a></code> | <code>typing.Union[int, float]</code> | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#name HyperdriveConfig#name}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin"></a>

```python
origin: HyperdriveConfigOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching"></a>

```python
caching: HyperdriveConfigCaching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls"></a>

```python
mtls: HyperdriveConfigMtls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}.

---

##### `origin_connection_limit`<sup>Optional</sup> <a name="origin_connection_limit" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit"></a>

```python
origin_connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}

---

### HyperdriveConfigMtls <a name="HyperdriveConfigMtls" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigMtls(
  ca_certificate_id: str = None,
  mtls_certificate_id: str = None,
  sslmode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | Define CA certificate ID obtained after uploading CA cert. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | Define mTLS certificate ID obtained after uploading client cert. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode">sslmode</a></code> | <code>str</code> | Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA. |

---

##### `ca_certificate_id`<sup>Optional</sup> <a name="ca_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

Define CA certificate ID obtained after uploading CA cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}

---

##### `mtls_certificate_id`<sup>Optional</sup> <a name="mtls_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId"></a>

```python
mtls_certificate_id: str
```

- *Type:* str

Define mTLS certificate ID obtained after uploading client cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}

---

### HyperdriveConfigOrigin <a name="HyperdriveConfigOrigin" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigOrigin(
  database: str,
  host: str,
  password: str,
  scheme: str,
  user: str,
  access_client_id: str = None,
  access_client_secret: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database">database</a></code> | <code>str</code> | Set the name of your origin database. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host">host</a></code> | <code>str</code> | Defines the host (hostname or IP) of your origin database. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password">password</a></code> | <code>str</code> | Set the password needed to access your origin database. The API never returns this write-only value. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme">scheme</a></code> | <code>str</code> | Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql". |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user">user</a></code> | <code>str</code> | Set the user of your origin database. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId">access_client_id</a></code> | <code>str</code> | Defines the Client ID of the Access token to use when connecting to the origin database. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret">access_client_secret</a></code> | <code>str</code> | Defines the Client Secret of the Access Token to use when connecting to the origin database. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Defines the port (default: 5432 for Postgres) of your origin database. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database"></a>

```python
database: str
```

- *Type:* str

Set the name of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#database HyperdriveConfig#database}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host"></a>

```python
host: str
```

- *Type:* str

Defines the host (hostname or IP) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#host HyperdriveConfig#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password"></a>

```python
password: str
```

- *Type:* str

Set the password needed to access your origin database. The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#password HyperdriveConfig#password}

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user"></a>

```python
user: str
```

- *Type:* str

Set the user of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#user HyperdriveConfig#user}

---

##### `access_client_id`<sup>Optional</sup> <a name="access_client_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId"></a>

```python
access_client_id: str
```

- *Type:* str

Defines the Client ID of the Access token to use when connecting to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}

---

##### `access_client_secret`<sup>Optional</sup> <a name="access_client_secret" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret"></a>

```python
access_client_secret: str
```

- *Type:* str

Defines the Client Secret of the Access Token to use when connecting to the origin database.

The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the port (default: 5432 for Postgres) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/hyperdrive_config#port HyperdriveConfig#port}

---

## Classes <a name="Classes" id="Classes"></a>

### HyperdriveConfigCachingOutputReference <a name="HyperdriveConfigCachingOutputReference" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigCachingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate">reset_stale_while_revalidate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_stale_while_revalidate` <a name="reset_stale_while_revalidate" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate"></a>

```python
def reset_stale_while_revalidate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput">stale_while_revalidate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">stale_while_revalidate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stale_while_revalidate_input`<sup>Optional</sup> <a name="stale_while_revalidate_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput"></a>

```python
stale_while_revalidate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stale_while_revalidate`<sup>Required</sup> <a name="stale_while_revalidate" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```python
stale_while_revalidate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HyperdriveConfigCaching]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>]

---


### HyperdriveConfigMtlsOutputReference <a name="HyperdriveConfigMtlsOutputReference" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId">reset_ca_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId">reset_mtls_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode">reset_sslmode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate_id` <a name="reset_ca_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId"></a>

```python
def reset_ca_certificate_id() -> None
```

##### `reset_mtls_certificate_id` <a name="reset_mtls_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId"></a>

```python
def reset_mtls_certificate_id() -> None
```

##### `reset_sslmode` <a name="reset_sslmode" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode"></a>

```python
def reset_sslmode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput">ca_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput">mtls_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput">sslmode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">mtls_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode">sslmode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_id_input`<sup>Optional</sup> <a name="ca_certificate_id_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput"></a>

```python
ca_certificate_id_input: str
```

- *Type:* str

---

##### `mtls_certificate_id_input`<sup>Optional</sup> <a name="mtls_certificate_id_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput"></a>

```python
mtls_certificate_id_input: str
```

- *Type:* str

---

##### `sslmode_input`<sup>Optional</sup> <a name="sslmode_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput"></a>

```python
sslmode_input: str
```

- *Type:* str

---

##### `ca_certificate_id`<sup>Required</sup> <a name="ca_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

---

##### `mtls_certificate_id`<sup>Required</sup> <a name="mtls_certificate_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```python
mtls_certificate_id: str
```

- *Type:* str

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```python
sslmode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HyperdriveConfigMtls]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>]

---


### HyperdriveConfigOriginOutputReference <a name="HyperdriveConfigOriginOutputReference" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hyperdrive_config

hyperdriveConfig.HyperdriveConfigOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId">reset_access_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret">reset_access_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_client_id` <a name="reset_access_client_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId"></a>

```python
def reset_access_client_id() -> None
```

##### `reset_access_client_secret` <a name="reset_access_client_secret" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret"></a>

```python
def reset_access_client_secret() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput">access_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput">access_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId">access_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret">access_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_client_id_input`<sup>Optional</sup> <a name="access_client_id_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput"></a>

```python
access_client_id_input: str
```

- *Type:* str

---

##### `access_client_secret_input`<sup>Optional</sup> <a name="access_client_secret_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput"></a>

```python
access_client_secret_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `access_client_id`<sup>Required</sup> <a name="access_client_id" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```python
access_client_id: str
```

- *Type:* str

---

##### `access_client_secret`<sup>Required</sup> <a name="access_client_secret" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```python
access_client_secret: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HyperdriveConfigOrigin]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>]

---



