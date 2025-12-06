# `tokenValidationRules` Submodule <a name="`tokenValidationRules` Submodule" id="@cdktf/provider-cloudflare.tokenValidationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenValidationRules <a name="TokenValidationRules" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRules(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  description: str,
  enabled: bool | IResolvable,
  expression: str,
  selector: TokenValidationRulesSelector,
  title: str,
  zone_id: str,
  position: TokenValidationRulesPosition = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.action">action</a></code> | <code>str</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description that gives more details than `title`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.expression">expression</a></code> | <code>str</code> | Rule expression. Requests that fail to match this expression will be subject to `action`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | Select operations covered by this rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.title">title</a></code> | <code>str</code> | A human-readable name for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | Update rule order among zone rules. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.action"></a>

- *Type:* str

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#action TokenValidationRules#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description that gives more details than `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#description TokenValidationRules#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.expression"></a>

- *Type:* str

Rule expression. Requests that fail to match this expression will be subject to `action`.

For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

Select operations covered by this rule.

For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.title"></a>

- *Type:* str

A human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#title TokenValidationRules#title}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.position"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

Update rule order among zone rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#position TokenValidationRules#position}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition">put_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector">put_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition">reset_position</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_position` <a name="put_position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition"></a>

```python
def put_position(
  after: str = None,
  before: str = None,
  index: typing.Union[int, float] = None
) -> None
```

###### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition.parameter.after"></a>

- *Type:* str

Move rule to after rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#after TokenValidationRules#after}

---

###### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition.parameter.before"></a>

- *Type:* str

Move rule to before rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#before TokenValidationRules#before}

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition.parameter.index"></a>

- *Type:* typing.Union[int, float]

Move rule to this position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#index TokenValidationRules#index}

---

##### `put_selector` <a name="put_selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector"></a>

```python
def put_selector(
  exclude: IResolvable | typing.List[TokenValidationRulesSelectorExclude] = None,
  include: IResolvable | typing.List[TokenValidationRulesSelectorInclude] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector.parameter.exclude"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]

Ignore operations that were otherwise included by `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector.parameter.include"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]

Select all matching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#include TokenValidationRules#include}

---

##### `reset_position` <a name="reset_position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition"></a>

```python
def reset_position() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TokenValidationRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TokenValidationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TokenValidationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput">position_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput">selector_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position"></a>

```python
position: TokenValidationRulesPositionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector"></a>

```python
selector: TokenValidationRulesSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput"></a>

```python
position_input: IResolvable | TokenValidationRulesPosition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput"></a>

```python
selector_input: IResolvable | TokenValidationRulesSelector
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TokenValidationRulesConfig <a name="TokenValidationRulesConfig" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  description: str,
  enabled: bool | IResolvable,
  expression: str,
  selector: TokenValidationRulesSelector,
  title: str,
  zone_id: str,
  position: TokenValidationRulesPosition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action">action</a></code> | <code>str</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description">description</a></code> | <code>str</code> | A human-readable description that gives more details than `title`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression">expression</a></code> | <code>str</code> | Rule expression. Requests that fail to match this expression will be subject to `action`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | Select operations covered by this rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title">title</a></code> | <code>str</code> | A human-readable name for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | Update rule order among zone rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#action TokenValidationRules#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description that gives more details than `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#description TokenValidationRules#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

Rule expression. Requests that fail to match this expression will be subject to `action`.

For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector"></a>

```python
selector: TokenValidationRulesSelector
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

Select operations covered by this rule.

For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title"></a>

```python
title: str
```

- *Type:* str

A human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#title TokenValidationRules#title}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position"></a>

```python
position: TokenValidationRulesPosition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

Update rule order among zone rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#position TokenValidationRules#position}

---

### TokenValidationRulesPosition <a name="TokenValidationRulesPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesPosition(
  after: str = None,
  before: str = None,
  index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after">after</a></code> | <code>str</code> | Move rule to after rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before">before</a></code> | <code>str</code> | Move rule to before rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Move rule to this position. |

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after"></a>

```python
after: str
```

- *Type:* str

Move rule to after rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#after TokenValidationRules#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before"></a>

```python
before: str
```

- *Type:* str

Move rule to before rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#before TokenValidationRules#before}

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Move rule to this position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#index TokenValidationRules#index}

---

### TokenValidationRulesSelector <a name="TokenValidationRulesSelector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelector(
  exclude: IResolvable | typing.List[TokenValidationRulesSelectorExclude] = None,
  include: IResolvable | typing.List[TokenValidationRulesSelectorInclude] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude">exclude</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]</code> | Ignore operations that were otherwise included by `include`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include">include</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]</code> | Select all matching operations. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude"></a>

```python
exclude: IResolvable | typing.List[TokenValidationRulesSelectorExclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]

Ignore operations that were otherwise included by `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include"></a>

```python
include: IResolvable | typing.List[TokenValidationRulesSelectorInclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]

Select all matching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#include TokenValidationRules#include}

---

### TokenValidationRulesSelectorExclude <a name="TokenValidationRulesSelectorExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorExclude(
  operation_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds">operation_ids</a></code> | <code>typing.List[str]</code> | Excluded operation IDs. |

---

##### `operation_ids`<sup>Optional</sup> <a name="operation_ids" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds"></a>

```python
operation_ids: typing.List[str]
```

- *Type:* typing.List[str]

Excluded operation IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#operation_ids TokenValidationRules#operation_ids}

---

### TokenValidationRulesSelectorInclude <a name="TokenValidationRulesSelectorInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorInclude(
  host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host">host</a></code> | <code>typing.List[str]</code> | Included hostnames. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host"></a>

```python
host: typing.List[str]
```

- *Type:* typing.List[str]

Included hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_rules#host TokenValidationRules#host}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenValidationRulesPositionOutputReference <a name="TokenValidationRulesPositionOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesPositionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter">reset_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore">reset_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex">reset_index</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_after` <a name="reset_after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter"></a>

```python
def reset_after() -> None
```

##### `reset_before` <a name="reset_before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore"></a>

```python
def reset_before() -> None
```

##### `reset_index` <a name="reset_index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex"></a>

```python
def reset_index() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput">after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput">before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after">after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before">before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_input`<sup>Optional</sup> <a name="after_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput"></a>

```python
after_input: str
```

- *Type:* str

---

##### `before_input`<sup>Optional</sup> <a name="before_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput"></a>

```python
before_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after"></a>

```python
after: str
```

- *Type:* str

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before"></a>

```python
before: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TokenValidationRulesPosition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---


### TokenValidationRulesSelectorExcludeList <a name="TokenValidationRulesSelectorExcludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TokenValidationRulesSelectorExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TokenValidationRulesSelectorExclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]

---


### TokenValidationRulesSelectorExcludeOutputReference <a name="TokenValidationRulesSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds">reset_operation_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operation_ids` <a name="reset_operation_ids" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds"></a>

```python
def reset_operation_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput">operation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds">operation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_ids_input`<sup>Optional</sup> <a name="operation_ids_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput"></a>

```python
operation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation_ids`<sup>Required</sup> <a name="operation_ids" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds"></a>

```python
operation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TokenValidationRulesSelectorExclude
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>

---


### TokenValidationRulesSelectorIncludeList <a name="TokenValidationRulesSelectorIncludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TokenValidationRulesSelectorIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TokenValidationRulesSelectorInclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]

---


### TokenValidationRulesSelectorIncludeOutputReference <a name="TokenValidationRulesSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost">reset_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput">host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host">host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput"></a>

```python
host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host"></a>

```python
host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TokenValidationRulesSelectorInclude
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>

---


### TokenValidationRulesSelectorOutputReference <a name="TokenValidationRulesSelectorOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import token_validation_rules

tokenValidationRules.TokenValidationRulesSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude">put_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude">put_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclude` <a name="put_exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude"></a>

```python
def put_exclude(
  value: IResolvable | typing.List[TokenValidationRulesSelectorExclude]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]

---

##### `put_include` <a name="put_include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude"></a>

```python
def put_include(
  value: IResolvable | typing.List[TokenValidationRulesSelectorInclude]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]

---

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput">exclude_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput">include_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude"></a>

```python
exclude: TokenValidationRulesSelectorExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include"></a>

```python
include: TokenValidationRulesSelectorIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a>

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput"></a>

```python
exclude_input: IResolvable | typing.List[TokenValidationRulesSelectorExclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput"></a>

```python
include_input: IResolvable | typing.List[TokenValidationRulesSelectorInclude]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TokenValidationRulesSelector
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---



