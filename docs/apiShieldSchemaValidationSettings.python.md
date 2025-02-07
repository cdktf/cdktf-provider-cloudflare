# `apiShieldSchemaValidationSettings` Submodule <a name="`apiShieldSchemaValidationSettings` Submodule" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldSchemaValidationSettings <a name="ApiShieldSchemaValidationSettings" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  validation_default_mitigation_action: str,
  zone_id: str,
  validation_override_mitigation_action: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.validationDefaultMitigationAction">validation_default_mitigation_action</a></code> | <code>str</code> | The default mitigation action used when there is no mitigation action defined on the operation. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.validationOverrideMitigationAction">validation_override_mitigation_action</a></code> | <code>str</code> | When set, this overrides both zone level and operation level mitigation actions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `validation_default_mitigation_action`<sup>Required</sup> <a name="validation_default_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.validationDefaultMitigationAction"></a>

- *Type:* str

The default mitigation action used when there is no mitigation action defined on the operation.

Mitigation actions are as follows:

* `log` - log request when request does not conform to schema
* `block` - deny access to the site when request does not conform to schema

A special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}

---

##### `validation_override_mitigation_action`<sup>Optional</sup> <a name="validation_override_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.validationOverrideMitigationAction"></a>

- *Type:* str

When set, this overrides both zone level and operation level mitigation actions.

* `none` will skip running schema validation entirely for the request

  * `null` indicates that no override is in place

To clear any override, use the special value `disable_override` or `null`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction">reset_validation_override_mitigation_action</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_validation_override_mitigation_action` <a name="reset_validation_override_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction"></a>

```python
def reset_validation_override_mitigation_action() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiShieldSchemaValidationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput">validation_default_mitigation_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput">validation_override_mitigation_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction">validation_default_mitigation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction">validation_override_mitigation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `validation_default_mitigation_action_input`<sup>Optional</sup> <a name="validation_default_mitigation_action_input" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput"></a>

```python
validation_default_mitigation_action_input: str
```

- *Type:* str

---

##### `validation_override_mitigation_action_input`<sup>Optional</sup> <a name="validation_override_mitigation_action_input" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput"></a>

```python
validation_override_mitigation_action_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `validation_default_mitigation_action`<sup>Required</sup> <a name="validation_default_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction"></a>

```python
validation_default_mitigation_action: str
```

- *Type:* str

---

##### `validation_override_mitigation_action`<sup>Required</sup> <a name="validation_override_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction"></a>

```python
validation_override_mitigation_action: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldSchemaValidationSettingsConfig <a name="ApiShieldSchemaValidationSettingsConfig" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import api_shield_schema_validation_settings

apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  validation_default_mitigation_action: str,
  zone_id: str,
  validation_override_mitigation_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction">validation_default_mitigation_action</a></code> | <code>str</code> | The default mitigation action used when there is no mitigation action defined on the operation. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction">validation_override_mitigation_action</a></code> | <code>str</code> | When set, this overrides both zone level and operation level mitigation actions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `validation_default_mitigation_action`<sup>Required</sup> <a name="validation_default_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction"></a>

```python
validation_default_mitigation_action: str
```

- *Type:* str

The default mitigation action used when there is no mitigation action defined on the operation.

Mitigation actions are as follows:

* `log` - log request when request does not conform to schema
* `block` - deny access to the site when request does not conform to schema

A special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}

---

##### `validation_override_mitigation_action`<sup>Optional</sup> <a name="validation_override_mitigation_action" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction"></a>

```python
validation_override_mitigation_action: str
```

- *Type:* str

When set, this overrides both zone level and operation level mitigation actions.

* `none` will skip running schema validation entirely for the request

  * `null` indicates that no override is in place

To clear any override, use the special value `disable_override` or `null`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}

---



