# `cloudflare_teams_rule`

Refer to the Terraform Registory for docs: [`cloudflare_teams_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule).

# `teamsRule` Submodule <a name="`teamsRule` Submodule" id="@cdktf/provider-cloudflare.teamsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsRule <a name="TeamsRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule cloudflare_teams_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRule(
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
  action: str,
  description: str,
  name: str,
  precedence: typing.Union[int, float],
  device_posture: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filters: typing.List[str] = None,
  id: str = None,
  identity: str = None,
  rule_settings: TeamsRuleRuleSettings = None,
  traffic: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.devicePosture">device_posture</a></code> | <code>str</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.filters">filters</a></code> | <code>typing.List[str]</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.identity">identity</a></code> | <code>str</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.traffic">traffic</a></code> | <code>str</code> | The wirefilter expression to be used for traffic matching. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.action"></a>

- *Type:* str

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.precedence"></a>

- *Type:* typing.Union[int, float]

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#precedence TeamsRule#precedence}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.devicePosture"></a>

- *Type:* str

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.filters"></a>

- *Type:* typing.List[str]

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.identity"></a>

- *Type:* str

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#identity TeamsRule#identity}

---

##### `rule_settings`<sup>Optional</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.ruleSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.traffic"></a>

- *Type:* str

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#traffic TeamsRule#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings">put_rule_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings">reset_rule_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic">reset_traffic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_rule_settings` <a name="put_rule_settings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings"></a>

```python
def put_rule_settings(
  add_headers: typing.Mapping[str] = None,
  allow_child_bypass: typing.Union[bool, IResolvable] = None,
  audit_ssh: TeamsRuleRuleSettingsAuditSsh = None,
  biso_admin_controls: TeamsRuleRuleSettingsBisoAdminControls = None,
  block_page_enabled: typing.Union[bool, IResolvable] = None,
  block_page_reason: str = None,
  bypass_parent_rule: typing.Union[bool, IResolvable] = None,
  check_session: TeamsRuleRuleSettingsCheckSession = None,
  egress: TeamsRuleRuleSettingsEgress = None,
  insecure_disable_dnssec_validation: typing.Union[bool, IResolvable] = None,
  ip_categories: typing.Union[bool, IResolvable] = None,
  l4_override: TeamsRuleRuleSettingsL4Override = None,
  override_host: str = None,
  override_ips: typing.List[str] = None,
  payload_log: TeamsRuleRuleSettingsPayloadLog = None,
  untrusted_cert: TeamsRuleRuleSettingsUntrustedCert = None
) -> None
```

###### `add_headers`<sup>Optional</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.addHeaders"></a>

- *Type:* typing.Mapping[str]

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#add_headers TeamsRule#add_headers}

---

###### `allow_child_bypass`<sup>Optional</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.allowChildBypass"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#allow_child_bypass TeamsRule#allow_child_bypass}

---

###### `audit_ssh`<sup>Optional</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.auditSsh"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#audit_ssh TeamsRule#audit_ssh}

---

###### `biso_admin_controls`<sup>Optional</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.bisoAdminControls"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

###### `block_page_enabled`<sup>Optional</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.blockPageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

###### `block_page_reason`<sup>Optional</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.blockPageReason"></a>

- *Type:* str

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

###### `bypass_parent_rule`<sup>Optional</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.bypassParentRule"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#bypass_parent_rule TeamsRule#bypass_parent_rule}

---

###### `check_session`<sup>Optional</sup> <a name="check_session" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.checkSession"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#check_session TeamsRule#check_session}

---

###### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.egress"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#egress TeamsRule#egress}

---

###### `insecure_disable_dnssec_validation`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.insecureDisableDnssecValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

###### `ip_categories`<sup>Optional</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.ipCategories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ip_categories TeamsRule#ip_categories}

---

###### `l4_override`<sup>Optional</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.l4Override"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#l4override TeamsRule#l4override}

---

###### `override_host`<sup>Optional</sup> <a name="override_host" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.overrideHost"></a>

- *Type:* str

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#override_host TeamsRule#override_host}

---

###### `override_ips`<sup>Optional</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.overrideIps"></a>

- *Type:* typing.List[str]

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#override_ips TeamsRule#override_ips}

---

###### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.payloadLog"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#payload_log TeamsRule#payload_log}

---

###### `untrusted_cert`<sup>Optional</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.untrustedCert"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#untrusted_cert TeamsRule#untrusted_cert}

---

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_rule_settings` <a name="reset_rule_settings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings"></a>

```python
def reset_rule_settings() -> None
```

##### `reset_traffic` <a name="reset_traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic"></a>

```python
def reset_traffic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamsRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput">device_posture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput">filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput">precedence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput">rule_settings_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput">traffic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture">device_posture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters">filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic">traffic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule_settings`<sup>Required</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings"></a>

```python
rule_settings: TeamsRuleRuleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput"></a>

```python
device_posture_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput"></a>

```python
filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `precedence_input`<sup>Optional</sup> <a name="precedence_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput"></a>

```python
precedence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_settings_input`<sup>Optional</sup> <a name="rule_settings_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput"></a>

```python
rule_settings_input: TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `traffic_input`<sup>Optional</sup> <a name="traffic_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput"></a>

```python
traffic_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture"></a>

```python
device_posture: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic"></a>

```python
traffic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsRuleConfig <a name="TeamsRuleConfig" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  action: str,
  description: str,
  name: str,
  precedence: typing.Union[int, float],
  device_posture: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  filters: typing.List[str] = None,
  id: str = None,
  identity: str = None,
  rule_settings: TeamsRuleRuleSettings = None,
  traffic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action">action</a></code> | <code>str</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture">device_posture</a></code> | <code>str</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters">filters</a></code> | <code>typing.List[str]</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity">identity</a></code> | <code>str</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic">traffic</a></code> | <code>str</code> | The wirefilter expression to be used for traffic matching. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#precedence TeamsRule#precedence}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture"></a>

```python
device_posture: str
```

- *Type:* str

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity"></a>

```python
identity: str
```

- *Type:* str

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#identity TeamsRule#identity}

---

##### `rule_settings`<sup>Optional</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings"></a>

```python
rule_settings: TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic"></a>

```python
traffic: str
```

- *Type:* str

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#traffic TeamsRule#traffic}

---

### TeamsRuleRuleSettings <a name="TeamsRuleRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettings(
  add_headers: typing.Mapping[str] = None,
  allow_child_bypass: typing.Union[bool, IResolvable] = None,
  audit_ssh: TeamsRuleRuleSettingsAuditSsh = None,
  biso_admin_controls: TeamsRuleRuleSettingsBisoAdminControls = None,
  block_page_enabled: typing.Union[bool, IResolvable] = None,
  block_page_reason: str = None,
  bypass_parent_rule: typing.Union[bool, IResolvable] = None,
  check_session: TeamsRuleRuleSettingsCheckSession = None,
  egress: TeamsRuleRuleSettingsEgress = None,
  insecure_disable_dnssec_validation: typing.Union[bool, IResolvable] = None,
  ip_categories: typing.Union[bool, IResolvable] = None,
  l4_override: TeamsRuleRuleSettingsL4Override = None,
  override_host: str = None,
  override_ips: typing.List[str] = None,
  payload_log: TeamsRuleRuleSettingsPayloadLog = None,
  untrusted_cert: TeamsRuleRuleSettingsUntrustedCert = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders">add_headers</a></code> | <code>typing.Mapping[str]</code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass">allow_child_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow parent MSP accounts to enable bypass their children's rules. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh">audit_ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | audit_ssh block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls">biso_admin_controls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled">block_page_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason">block_page_reason</a></code> | <code>str</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule">bypass_parent_rule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow child MSP accounts to bypass their parent's rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession">check_session</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation">insecure_disable_dnssec_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories">ip_categories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turns on IP category based filter on dns if the rule contains dns category checks. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override">l4_override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost">override_host</a></code> | <code>str</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps">override_ips</a></code> | <code>typing.List[str]</code> | The IPs to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert">untrusted_cert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | untrusted_cert block. |

---

##### `add_headers`<sup>Optional</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders"></a>

```python
add_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#add_headers TeamsRule#add_headers}

---

##### `allow_child_bypass`<sup>Optional</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass"></a>

```python
allow_child_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#allow_child_bypass TeamsRule#allow_child_bypass}

---

##### `audit_ssh`<sup>Optional</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh"></a>

```python
audit_ssh: TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#audit_ssh TeamsRule#audit_ssh}

---

##### `biso_admin_controls`<sup>Optional</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls"></a>

```python
biso_admin_controls: TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

##### `block_page_enabled`<sup>Optional</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled"></a>

```python
block_page_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

##### `block_page_reason`<sup>Optional</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason"></a>

```python
block_page_reason: str
```

- *Type:* str

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

##### `bypass_parent_rule`<sup>Optional</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule"></a>

```python
bypass_parent_rule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#bypass_parent_rule TeamsRule#bypass_parent_rule}

---

##### `check_session`<sup>Optional</sup> <a name="check_session" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession"></a>

```python
check_session: TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#check_session TeamsRule#check_session}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress"></a>

```python
egress: TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#egress TeamsRule#egress}

---

##### `insecure_disable_dnssec_validation`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation"></a>

```python
insecure_disable_dnssec_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

##### `ip_categories`<sup>Optional</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories"></a>

```python
ip_categories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ip_categories TeamsRule#ip_categories}

---

##### `l4_override`<sup>Optional</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override"></a>

```python
l4_override: TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#l4override TeamsRule#l4override}

---

##### `override_host`<sup>Optional</sup> <a name="override_host" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost"></a>

```python
override_host: str
```

- *Type:* str

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#override_host TeamsRule#override_host}

---

##### `override_ips`<sup>Optional</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps"></a>

```python
override_ips: typing.List[str]
```

- *Type:* typing.List[str]

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#override_ips TeamsRule#override_ips}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog"></a>

```python
payload_log: TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#payload_log TeamsRule#payload_log}

---

##### `untrusted_cert`<sup>Optional</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert"></a>

```python
untrusted_cert: TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#untrusted_cert TeamsRule#untrusted_cert}

---

### TeamsRuleRuleSettingsAuditSsh <a name="TeamsRuleRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsAuditSsh(
  command_logging: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging">command_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Log all SSH commands. |

---

##### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging"></a>

```python
command_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#command_logging TeamsRule#command_logging}

---

### TeamsRuleRuleSettingsBisoAdminControls <a name="TeamsRuleRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsBisoAdminControls(
  disable_copy_paste: typing.Union[bool, IResolvable] = None,
  disable_download: typing.Union[bool, IResolvable] = None,
  disable_keyboard: typing.Union[bool, IResolvable] = None,
  disable_printing: typing.Union[bool, IResolvable] = None,
  disable_upload: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste">disable_copy_paste</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable copy-paste. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload">disable_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard">disable_keyboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable keyboard usage. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting">disable_printing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable printing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload">disable_upload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable upload. |

---

##### `disable_copy_paste`<sup>Optional</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste"></a>

```python
disable_copy_paste: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable copy-paste.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

##### `disable_download`<sup>Optional</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload"></a>

```python
disable_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_download TeamsRule#disable_download}

---

##### `disable_keyboard`<sup>Optional</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```python
disable_keyboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable keyboard usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

##### `disable_printing`<sup>Optional</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```python
disable_printing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable printing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_printing TeamsRule#disable_printing}

---

##### `disable_upload`<sup>Optional</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload"></a>

```python
disable_upload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_upload TeamsRule#disable_upload}

---

### TeamsRuleRuleSettingsCheckSession <a name="TeamsRuleRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsCheckSession(
  duration: str,
  enforce: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration">duration</a></code> | <code>str</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable session enforcement for this rule. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration"></a>

```python
duration: str
```

- *Type:* str

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#duration TeamsRule#duration}

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enforce TeamsRule#enforce}

---

### TeamsRuleRuleSettingsEgress <a name="TeamsRuleRuleSettingsEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsEgress(
  ipv4: str,
  ipv6: str,
  ipv4_fallback: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4">ipv4</a></code> | <code>str</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6">ipv6</a></code> | <code>str</code> | The IPv6 range to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback">ipv4_fallback</a></code> | <code>str</code> | The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

##### `ipv4_fallback`<sup>Optional</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback"></a>

```python
ipv4_fallback: str
```

- *Type:* str

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

---

### TeamsRuleRuleSettingsL4Override <a name="TeamsRuleRuleSettingsL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsL4Override(
  ip: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip">ip</a></code> | <code>str</code> | Override IP to forward traffic to. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Override Port to forward traffic to. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip"></a>

```python
ip: str
```

- *Type:* str

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#port TeamsRule#port}

---

### TeamsRuleRuleSettingsPayloadLog <a name="TeamsRuleRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsPayloadLog(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable DLP Payload Logging for this rule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

### TeamsRuleRuleSettingsUntrustedCert <a name="TeamsRuleRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsUntrustedCert(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action">action</a></code> | <code>str</code> | Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action"></a>

```python
action: str
```

- *Type:* str

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#action TeamsRule#action}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsRuleRuleSettingsAuditSshOutputReference <a name="TeamsRuleRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput">command_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging">command_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_logging_input`<sup>Optional</sup> <a name="command_logging_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput"></a>

```python
command_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```python
command_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---


### TeamsRuleRuleSettingsBisoAdminControlsOutputReference <a name="TeamsRuleRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste">reset_disable_copy_paste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload">reset_disable_download</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard">reset_disable_keyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting">reset_disable_printing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload">reset_disable_upload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_copy_paste` <a name="reset_disable_copy_paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste"></a>

```python
def reset_disable_copy_paste() -> None
```

##### `reset_disable_download` <a name="reset_disable_download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload"></a>

```python
def reset_disable_download() -> None
```

##### `reset_disable_keyboard` <a name="reset_disable_keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard"></a>

```python
def reset_disable_keyboard() -> None
```

##### `reset_disable_printing` <a name="reset_disable_printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting"></a>

```python
def reset_disable_printing() -> None
```

##### `reset_disable_upload` <a name="reset_disable_upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload"></a>

```python
def reset_disable_upload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput">disable_copy_paste_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput">disable_download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput">disable_keyboard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput">disable_printing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput">disable_upload_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste">disable_copy_paste</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload">disable_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard">disable_keyboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting">disable_printing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload">disable_upload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_copy_paste_input`<sup>Optional</sup> <a name="disable_copy_paste_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput"></a>

```python
disable_copy_paste_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_download_input`<sup>Optional</sup> <a name="disable_download_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput"></a>

```python
disable_download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_keyboard_input`<sup>Optional</sup> <a name="disable_keyboard_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput"></a>

```python
disable_keyboard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_printing_input`<sup>Optional</sup> <a name="disable_printing_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput"></a>

```python
disable_printing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_upload_input`<sup>Optional</sup> <a name="disable_upload_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput"></a>

```python
disable_upload_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_copy_paste`<sup>Required</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste"></a>

```python
disable_copy_paste: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_download`<sup>Required</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload"></a>

```python
disable_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_keyboard`<sup>Required</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard"></a>

```python
disable_keyboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_printing`<sup>Required</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting"></a>

```python
disable_printing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_upload`<sup>Required</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload"></a>

```python
disable_upload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---


### TeamsRuleRuleSettingsCheckSessionOutputReference <a name="TeamsRuleRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput">enforce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```python
enforce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---


### TeamsRuleRuleSettingsEgressOutputReference <a name="TeamsRuleRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback">reset_ipv4_fallback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_fallback` <a name="reset_ipv4_fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```python
def reset_ipv4_fallback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput">ipv4_fallback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback">ipv4_fallback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_fallback_input`<sup>Optional</sup> <a name="ipv4_fallback_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```python
ipv4_fallback_input: str
```

- *Type:* str

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```python
ipv4_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv4_fallback`<sup>Required</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```python
ipv4_fallback: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---


### TeamsRuleRuleSettingsL4OverrideOutputReference <a name="TeamsRuleRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---


### TeamsRuleRuleSettingsOutputReference <a name="TeamsRuleRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh">put_audit_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls">put_biso_admin_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession">put_check_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override">put_l4_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog">put_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert">put_untrusted_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders">reset_add_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass">reset_allow_child_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh">reset_audit_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls">reset_biso_admin_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled">reset_block_page_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason">reset_block_page_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule">reset_bypass_parent_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession">reset_check_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">reset_insecure_disable_dnssec_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories">reset_ip_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override">reset_l4_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost">reset_override_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps">reset_override_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog">reset_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert">reset_untrusted_cert</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_ssh` <a name="put_audit_ssh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh"></a>

```python
def put_audit_ssh(
  command_logging: typing.Union[bool, IResolvable]
) -> None
```

###### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh.parameter.commandLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#command_logging TeamsRule#command_logging}

---

##### `put_biso_admin_controls` <a name="put_biso_admin_controls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls"></a>

```python
def put_biso_admin_controls(
  disable_copy_paste: typing.Union[bool, IResolvable] = None,
  disable_download: typing.Union[bool, IResolvable] = None,
  disable_keyboard: typing.Union[bool, IResolvable] = None,
  disable_printing: typing.Union[bool, IResolvable] = None,
  disable_upload: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disable_copy_paste`<sup>Optional</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.disableCopyPaste"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable copy-paste.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

###### `disable_download`<sup>Optional</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.disableDownload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_download TeamsRule#disable_download}

---

###### `disable_keyboard`<sup>Optional</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.disableKeyboard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable keyboard usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

###### `disable_printing`<sup>Optional</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.disablePrinting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable printing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_printing TeamsRule#disable_printing}

---

###### `disable_upload`<sup>Optional</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.disableUpload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#disable_upload TeamsRule#disable_upload}

---

##### `put_check_session` <a name="put_check_session" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession"></a>

```python
def put_check_session(
  duration: str,
  enforce: typing.Union[bool, IResolvable]
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession.parameter.duration"></a>

- *Type:* str

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#duration TeamsRule#duration}

---

###### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession.parameter.enforce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enforce TeamsRule#enforce}

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress"></a>

```python
def put_egress(
  ipv4: str,
  ipv6: str,
  ipv4_fallback: str = None
) -> None
```

###### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.ipv4"></a>

- *Type:* str

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

###### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.ipv6"></a>

- *Type:* str

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

###### `ipv4_fallback`<sup>Optional</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.ipv4Fallback"></a>

- *Type:* str

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

---

##### `put_l4_override` <a name="put_l4_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override"></a>

```python
def put_l4_override(
  ip: str,
  port: typing.Union[int, float]
) -> None
```

###### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override.parameter.ip"></a>

- *Type:* str

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override.parameter.port"></a>

- *Type:* typing.Union[int, float]

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#port TeamsRule#port}

---

##### `put_payload_log` <a name="put_payload_log" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog"></a>

```python
def put_payload_log(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `put_untrusted_cert` <a name="put_untrusted_cert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert"></a>

```python
def put_untrusted_cert(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert.parameter.action"></a>

- *Type:* str

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `reset_add_headers` <a name="reset_add_headers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders"></a>

```python
def reset_add_headers() -> None
```

##### `reset_allow_child_bypass` <a name="reset_allow_child_bypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass"></a>

```python
def reset_allow_child_bypass() -> None
```

##### `reset_audit_ssh` <a name="reset_audit_ssh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh"></a>

```python
def reset_audit_ssh() -> None
```

##### `reset_biso_admin_controls` <a name="reset_biso_admin_controls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls"></a>

```python
def reset_biso_admin_controls() -> None
```

##### `reset_block_page_enabled` <a name="reset_block_page_enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```python
def reset_block_page_enabled() -> None
```

##### `reset_block_page_reason` <a name="reset_block_page_reason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason"></a>

```python
def reset_block_page_reason() -> None
```

##### `reset_bypass_parent_rule` <a name="reset_bypass_parent_rule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule"></a>

```python
def reset_bypass_parent_rule() -> None
```

##### `reset_check_session` <a name="reset_check_session" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession"></a>

```python
def reset_check_session() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_insecure_disable_dnssec_validation` <a name="reset_insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```python
def reset_insecure_disable_dnssec_validation() -> None
```

##### `reset_ip_categories` <a name="reset_ip_categories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories"></a>

```python
def reset_ip_categories() -> None
```

##### `reset_l4_override` <a name="reset_l4_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override"></a>

```python
def reset_l4_override() -> None
```

##### `reset_override_host` <a name="reset_override_host" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost"></a>

```python
def reset_override_host() -> None
```

##### `reset_override_ips` <a name="reset_override_ips" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps"></a>

```python
def reset_override_ips() -> None
```

##### `reset_payload_log` <a name="reset_payload_log" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog"></a>

```python
def reset_payload_log() -> None
```

##### `reset_untrusted_cert` <a name="reset_untrusted_cert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert"></a>

```python
def reset_untrusted_cert() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh">audit_ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls">biso_admin_controls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession">check_session</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override">l4_override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert">untrusted_cert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput">add_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput">allow_child_bypass_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput">audit_ssh_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput">biso_admin_controls_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput">block_page_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput">block_page_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput">bypass_parent_rule_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput">check_session_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput">egress_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">insecure_disable_dnssec_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput">ip_categories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput">l4_override_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput">override_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput">override_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput">payload_log_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput">untrusted_cert_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders">add_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass">allow_child_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled">block_page_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason">block_page_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule">bypass_parent_rule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation">insecure_disable_dnssec_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories">ip_categories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost">override_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps">override_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_ssh`<sup>Required</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh"></a>

```python
audit_ssh: TeamsRuleRuleSettingsAuditSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a>

---

##### `biso_admin_controls`<sup>Required</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls"></a>

```python
biso_admin_controls: TeamsRuleRuleSettingsBisoAdminControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `check_session`<sup>Required</sup> <a name="check_session" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession"></a>

```python
check_session: TeamsRuleRuleSettingsCheckSessionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress"></a>

```python
egress: TeamsRuleRuleSettingsEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a>

---

##### `l4_override`<sup>Required</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override"></a>

```python
l4_override: TeamsRuleRuleSettingsL4OverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a>

---

##### `payload_log`<sup>Required</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog"></a>

```python
payload_log: TeamsRuleRuleSettingsPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a>

---

##### `untrusted_cert`<sup>Required</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert"></a>

```python
untrusted_cert: TeamsRuleRuleSettingsUntrustedCertOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a>

---

##### `add_headers_input`<sup>Optional</sup> <a name="add_headers_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput"></a>

```python
add_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_child_bypass_input`<sup>Optional</sup> <a name="allow_child_bypass_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput"></a>

```python
allow_child_bypass_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_ssh_input`<sup>Optional</sup> <a name="audit_ssh_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput"></a>

```python
audit_ssh_input: TeamsRuleRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---

##### `biso_admin_controls_input`<sup>Optional</sup> <a name="biso_admin_controls_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```python
biso_admin_controls_input: TeamsRuleRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `block_page_enabled_input`<sup>Optional</sup> <a name="block_page_enabled_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```python
block_page_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_reason_input`<sup>Optional</sup> <a name="block_page_reason_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput"></a>

```python
block_page_reason_input: str
```

- *Type:* str

---

##### `bypass_parent_rule_input`<sup>Optional</sup> <a name="bypass_parent_rule_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput"></a>

```python
bypass_parent_rule_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_session_input`<sup>Optional</sup> <a name="check_session_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput"></a>

```python
check_session_input: TeamsRuleRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput"></a>

```python
egress_input: TeamsRuleRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `insecure_disable_dnssec_validation_input`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```python
insecure_disable_dnssec_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_categories_input`<sup>Optional</sup> <a name="ip_categories_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput"></a>

```python
ip_categories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `l4_override_input`<sup>Optional</sup> <a name="l4_override_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput"></a>

```python
l4_override_input: TeamsRuleRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `override_host_input`<sup>Optional</sup> <a name="override_host_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput"></a>

```python
override_host_input: str
```

- *Type:* str

---

##### `override_ips_input`<sup>Optional</sup> <a name="override_ips_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput"></a>

```python
override_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_log_input`<sup>Optional</sup> <a name="payload_log_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput"></a>

```python
payload_log_input: TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---

##### `untrusted_cert_input`<sup>Optional</sup> <a name="untrusted_cert_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput"></a>

```python
untrusted_cert_input: TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---

##### `add_headers`<sup>Required</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders"></a>

```python
add_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_child_bypass`<sup>Required</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass"></a>

```python
allow_child_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_enabled`<sup>Required</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled"></a>

```python
block_page_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_reason`<sup>Required</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason"></a>

```python
block_page_reason: str
```

- *Type:* str

---

##### `bypass_parent_rule`<sup>Required</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule"></a>

```python
bypass_parent_rule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insecure_disable_dnssec_validation`<sup>Required</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```python
insecure_disable_dnssec_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_categories`<sup>Required</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories"></a>

```python
ip_categories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_host`<sup>Required</sup> <a name="override_host" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost"></a>

```python
override_host: str
```

- *Type:* str

---

##### `override_ips`<sup>Required</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps"></a>

```python
override_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---


### TeamsRuleRuleSettingsPayloadLogOutputReference <a name="TeamsRuleRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---


### TeamsRuleRuleSettingsUntrustedCertOutputReference <a name="TeamsRuleRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import teams_rule

teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```python
internal_value: TeamsRuleRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---



