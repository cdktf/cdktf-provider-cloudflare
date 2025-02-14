# `apiShieldSchema` Submodule <a name="`apiShieldSchema` Submodule" id="@cdktf/provider-cloudflare.apiShieldSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldSchema <a name="ApiShieldSchema" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema cloudflare_api_shield_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchema(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file: str,
  kind: str,
  zone_id: str,
  name: str = None,
  schema_id: str = None,
  validation_enabled: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.file">file</a></code> | <code>str</code> | Schema file bytes. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Kind of schema. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the schema. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.validationEnabled">validation_enabled</a></code> | <code>str</code> | Flag whether schema is enabled for validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.file"></a>

- *Type:* str

Schema file bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#file ApiShieldSchema#file}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.kind"></a>

- *Type:* str

Kind of schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#kind ApiShieldSchema#kind}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#zone_id ApiShieldSchema#zone_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.name"></a>

- *Type:* str

Name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#name ApiShieldSchema#name}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.schemaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}.

---

##### `validation_enabled`<sup>Optional</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.Initializer.parameter.validationEnabled"></a>

- *Type:* str

Flag whether schema is enabled for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#validation_enabled ApiShieldSchema#validation_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetValidationEnabled">reset_validation_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_validation_enabled` <a name="reset_validation_enabled" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.resetValidationEnabled"></a>

```python
def reset_validation_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiShieldSchema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiShieldSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiShieldSchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiShieldSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference">ApiShieldSchemaSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.uploadDetails">upload_details</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference">ApiShieldSchemaUploadDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabledInput">validation_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabled">validation_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schema"></a>

```python
schema: ApiShieldSchemaSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference">ApiShieldSchemaSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `upload_details`<sup>Required</sup> <a name="upload_details" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.uploadDetails"></a>

```python
upload_details: ApiShieldSchemaUploadDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference">ApiShieldSchemaUploadDetailsOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `validation_enabled_input`<sup>Optional</sup> <a name="validation_enabled_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabledInput"></a>

```python
validation_enabled_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `validation_enabled`<sup>Required</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.validationEnabled"></a>

```python
validation_enabled: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldSchemaConfig <a name="ApiShieldSchemaConfig" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file: str,
  kind: str,
  zone_id: str,
  name: str = None,
  schema_id: str = None,
  validation_enabled: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.file">file</a></code> | <code>str</code> | Schema file bytes. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.kind">kind</a></code> | <code>str</code> | Kind of schema. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.name">name</a></code> | <code>str</code> | Name of the schema. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.validationEnabled">validation_enabled</a></code> | <code>str</code> | Flag whether schema is enabled for validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.file"></a>

```python
file: str
```

- *Type:* str

Schema file bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#file ApiShieldSchema#file}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Kind of schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#kind ApiShieldSchema#kind}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#zone_id ApiShieldSchema#zone_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#name ApiShieldSchema#name}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#schema_id ApiShieldSchema#schema_id}.

---

##### `validation_enabled`<sup>Optional</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaConfig.property.validationEnabled"></a>

```python
validation_enabled: str
```

- *Type:* str

Flag whether schema is enabled for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/api_shield_schema#validation_enabled ApiShieldSchema#validation_enabled}

---

### ApiShieldSchemaSchema <a name="ApiShieldSchemaSchema" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaSchema()
```


### ApiShieldSchemaUploadDetails <a name="ApiShieldSchemaUploadDetails" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaUploadDetails()
```


### ApiShieldSchemaUploadDetailsWarnings <a name="ApiShieldSchemaUploadDetailsWarnings" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings()
```


## Classes <a name="Classes" id="Classes"></a>

### ApiShieldSchemaSchemaOutputReference <a name="ApiShieldSchemaSchemaOutputReference" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.validationEnabled">validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema">ApiShieldSchemaSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `validation_enabled`<sup>Required</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.validationEnabled"></a>

```python
validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchemaOutputReference.property.internalValue"></a>

```python
internal_value: ApiShieldSchemaSchema
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaSchema">ApiShieldSchemaSchema</a>

---


### ApiShieldSchemaUploadDetailsOutputReference <a name="ApiShieldSchemaUploadDetailsOutputReference" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList">ApiShieldSchemaUploadDetailsWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails">ApiShieldSchemaUploadDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.warnings"></a>

```python
warnings: ApiShieldSchemaUploadDetailsWarningsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList">ApiShieldSchemaUploadDetailsWarningsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApiShieldSchemaUploadDetails
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetails">ApiShieldSchemaUploadDetails</a>

---


### ApiShieldSchemaUploadDetailsWarningsList <a name="ApiShieldSchemaUploadDetailsWarningsList" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiShieldSchemaUploadDetailsWarningsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiShieldSchemaUploadDetailsWarningsOutputReference <a name="ApiShieldSchemaUploadDetailsWarningsOutputReference" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema

apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings">ApiShieldSchemaUploadDetailsWarnings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarningsOutputReference.property.internalValue"></a>

```python
internal_value: ApiShieldSchemaUploadDetailsWarnings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchema.ApiShieldSchemaUploadDetailsWarnings">ApiShieldSchemaUploadDetailsWarnings</a>

---



