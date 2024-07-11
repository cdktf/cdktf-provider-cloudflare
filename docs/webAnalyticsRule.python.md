# `webAnalyticsRule` Submodule <a name="`webAnalyticsRule` Submodule" id="@cdktf/provider-cloudflare.webAnalyticsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsRule <a name="WebAnalyticsRule" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRule(
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
  host: str,
  inclusive: typing.Union[bool, IResolvable],
  is_paused: typing.Union[bool, IResolvable],
  paths: typing.List[str],
  ruleset_id: str,
  id: str = None,
  timeouts: WebAnalyticsRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.host">host</a></code> | <code>str</code> | The host to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.inclusive">inclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule includes or excludes the matched traffic from being measured in Web Analytics. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.isPaused">is_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is paused or not. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.paths">paths</a></code> | <code>typing.List[str]</code> | A list of paths to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.rulesetId">ruleset_id</a></code> | <code>str</code> | The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.host"></a>

- *Type:* str

The host to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.inclusive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule includes or excludes the matched traffic from being measured in Web Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}

---

##### `is_paused`<sup>Required</sup> <a name="is_paused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.isPaused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is paused or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.paths"></a>

- *Type:* typing.List[str]

A list of paths to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}

---

##### `ruleset_id`<sup>Required</sup> <a name="ruleset_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.rulesetId"></a>

- *Type:* str

The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#timeouts WebAnalyticsRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebAnalyticsRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebAnalyticsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebAnalyticsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference">WebAnalyticsRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput">inclusive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput">is_paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput">ruleset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive">inclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused">is_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId">ruleset_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeouts"></a>

```python
timeouts: WebAnalyticsRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference">WebAnalyticsRuleTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inclusive_input`<sup>Optional</sup> <a name="inclusive_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput"></a>

```python
inclusive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_paused_input`<sup>Optional</sup> <a name="is_paused_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput"></a>

```python
is_paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ruleset_id_input`<sup>Optional</sup> <a name="ruleset_id_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput"></a>

```python
ruleset_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebAnalyticsRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive"></a>

```python
inclusive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_paused`<sup>Required</sup> <a name="is_paused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused"></a>

```python
is_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ruleset_id`<sup>Required</sup> <a name="ruleset_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId"></a>

```python
ruleset_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebAnalyticsRuleConfig <a name="WebAnalyticsRuleConfig" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  host: str,
  inclusive: typing.Union[bool, IResolvable],
  is_paused: typing.Union[bool, IResolvable],
  paths: typing.List[str],
  ruleset_id: str,
  id: str = None,
  timeouts: WebAnalyticsRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host">host</a></code> | <code>str</code> | The host to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive">inclusive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule includes or excludes the matched traffic from being measured in Web Analytics. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused">is_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is paused or not. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths">paths</a></code> | <code>typing.List[str]</code> | A list of paths to apply the rule to. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId">ruleset_id</a></code> | <code>str</code> | The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The host to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}

---

##### `inclusive`<sup>Required</sup> <a name="inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive"></a>

```python
inclusive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule includes or excludes the matched traffic from being measured in Web Analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}

---

##### `is_paused`<sup>Required</sup> <a name="is_paused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused"></a>

```python
is_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is paused or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths to apply the rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}

---

##### `ruleset_id`<sup>Required</sup> <a name="ruleset_id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId"></a>

```python
ruleset_id: str
```

- *Type:* str

The Web Analytics ruleset id. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#id WebAnalyticsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.timeouts"></a>

```python
timeouts: WebAnalyticsRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#timeouts WebAnalyticsRule#timeouts}

---

### WebAnalyticsRuleTimeouts <a name="WebAnalyticsRuleTimeouts" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRuleTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/web_analytics_rule#create WebAnalyticsRule#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebAnalyticsRuleTimeoutsOutputReference <a name="WebAnalyticsRuleTimeoutsOutputReference" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import web_analytics_rule

webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebAnalyticsRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleTimeouts">WebAnalyticsRuleTimeouts</a>]

---



