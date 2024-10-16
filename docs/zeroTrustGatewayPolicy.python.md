# `zeroTrustGatewayPolicy` Submodule <a name="`zeroTrustGatewayPolicy` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayPolicy <a name="ZeroTrustGatewayPolicy" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy(
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
  rule_settings: ZeroTrustGatewayPolicyRuleSettings = None,
  traffic: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.action">action</a></code> | <code>str</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.devicePosture">device_posture</a></code> | <code>str</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.filters">filters</a></code> | <code>typing.List[str]</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#id ZeroTrustGatewayPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.identity">identity</a></code> | <code>str</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.traffic">traffic</a></code> | <code>str</code> | The wirefilter expression to be used for traffic matching. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.action"></a>

- *Type:* str

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.precedence"></a>

- *Type:* typing.Union[int, float]

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.devicePosture"></a>

- *Type:* str

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.filters"></a>

- *Type:* typing.List[str]

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#id ZeroTrustGatewayPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.identity"></a>

- *Type:* str

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}

---

##### `rule_settings`<sup>Optional</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.ruleSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.Initializer.parameter.traffic"></a>

- *Type:* str

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings">put_rule_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetRuleSettings">reset_rule_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetTraffic">reset_traffic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule_settings` <a name="put_rule_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings"></a>

```python
def put_rule_settings(
  add_headers: typing.Mapping[str] = None,
  allow_child_bypass: typing.Union[bool, IResolvable] = None,
  audit_ssh: ZeroTrustGatewayPolicyRuleSettingsAuditSsh = None,
  biso_admin_controls: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls = None,
  block_page_enabled: typing.Union[bool, IResolvable] = None,
  block_page_reason: str = None,
  bypass_parent_rule: typing.Union[bool, IResolvable] = None,
  check_session: ZeroTrustGatewayPolicyRuleSettingsCheckSession = None,
  dns_resolvers: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers = None,
  egress: ZeroTrustGatewayPolicyRuleSettingsEgress = None,
  ignore_cname_category_matches: typing.Union[bool, IResolvable] = None,
  insecure_disable_dnssec_validation: typing.Union[bool, IResolvable] = None,
  ip_categories: typing.Union[bool, IResolvable] = None,
  l4_override: ZeroTrustGatewayPolicyRuleSettingsL4Override = None,
  notification_settings: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings = None,
  override_host: str = None,
  override_ips: typing.List[str] = None,
  payload_log: ZeroTrustGatewayPolicyRuleSettingsPayloadLog = None,
  resolve_dns_through_cloudflare: typing.Union[bool, IResolvable] = None,
  untrusted_cert: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert = None
) -> None
```

###### `add_headers`<sup>Optional</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.addHeaders"></a>

- *Type:* typing.Mapping[str]

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}

---

###### `allow_child_bypass`<sup>Optional</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.allowChildBypass"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}

---

###### `audit_ssh`<sup>Optional</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.auditSsh"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}

---

###### `biso_admin_controls`<sup>Optional</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.bisoAdminControls"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}

---

###### `block_page_enabled`<sup>Optional</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.blockPageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}

---

###### `block_page_reason`<sup>Optional</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.blockPageReason"></a>

- *Type:* str

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#block_page_reason ZeroTrustGatewayPolicy#block_page_reason}

---

###### `bypass_parent_rule`<sup>Optional</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.bypassParentRule"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}

---

###### `check_session`<sup>Optional</sup> <a name="check_session" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.checkSession"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}

---

###### `dns_resolvers`<sup>Optional</sup> <a name="dns_resolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.dnsResolvers"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

dns_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}

---

###### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.egress"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}

---

###### `ignore_cname_category_matches`<sup>Optional</sup> <a name="ignore_cname_category_matches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.ignoreCnameCategoryMatches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true, to ignore the category matches at CNAME domains in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}

---

###### `insecure_disable_dnssec_validation`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.insecureDisableDnssecValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}

---

###### `ip_categories`<sup>Optional</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.ipCategories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}

---

###### `l4_override`<sup>Optional</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.l4Override"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}

---

###### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.notificationSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}

---

###### `override_host`<sup>Optional</sup> <a name="override_host" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.overrideHost"></a>

- *Type:* str

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}

---

###### `override_ips`<sup>Optional</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.overrideIps"></a>

- *Type:* typing.List[str]

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}

---

###### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.payloadLog"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}

---

###### `resolve_dns_through_cloudflare`<sup>Optional</sup> <a name="resolve_dns_through_cloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.resolveDnsThroughCloudflare"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}

---

###### `untrusted_cert`<sup>Optional</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.putRuleSettings.parameter.untrustedCert"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}

---

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_rule_settings` <a name="reset_rule_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetRuleSettings"></a>

```python
def reset_rule_settings() -> None
```

##### `reset_traffic` <a name="reset_traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.resetTraffic"></a>

```python
def reset_traffic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustGatewayPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustGatewayPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePostureInput">device_posture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filtersInput">filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedenceInput">precedence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettingsInput">rule_settings_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.trafficInput">traffic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePosture">device_posture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filters">filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.traffic">traffic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule_settings`<sup>Required</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettings"></a>

```python
rule_settings: ZeroTrustGatewayPolicyRuleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePostureInput"></a>

```python
device_posture_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filtersInput"></a>

```python
filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `precedence_input`<sup>Optional</sup> <a name="precedence_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedenceInput"></a>

```python
precedence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_settings_input`<sup>Optional</sup> <a name="rule_settings_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.ruleSettingsInput"></a>

```python
rule_settings_input: ZeroTrustGatewayPolicyRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

---

##### `traffic_input`<sup>Optional</sup> <a name="traffic_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.trafficInput"></a>

```python
traffic_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.devicePosture"></a>

```python
device_posture: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.traffic"></a>

```python
traffic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayPolicyConfig <a name="ZeroTrustGatewayPolicyConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig(
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
  rule_settings: ZeroTrustGatewayPolicyRuleSettings = None,
  traffic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.action">action</a></code> | <code>str</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.devicePosture">device_posture</a></code> | <code>str</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.filters">filters</a></code> | <code>typing.List[str]</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#id ZeroTrustGatewayPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.identity">identity</a></code> | <code>str</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.ruleSettings">rule_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.traffic">traffic</a></code> | <code>str</code> | The wirefilter expression to be used for traffic matching. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#account_id ZeroTrustGatewayPolicy#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#description ZeroTrustGatewayPolicy#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#name ZeroTrustGatewayPolicy#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#precedence ZeroTrustGatewayPolicy#precedence}

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.devicePosture"></a>

```python
device_posture: str
```

- *Type:* str

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#device_posture ZeroTrustGatewayPolicy#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.filters"></a>

```python
filters: typing.List[str]
```

- *Type:* typing.List[str]

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#filters ZeroTrustGatewayPolicy#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#id ZeroTrustGatewayPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.identity"></a>

```python
identity: str
```

- *Type:* str

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#identity ZeroTrustGatewayPolicy#identity}

---

##### `rule_settings`<sup>Optional</sup> <a name="rule_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.ruleSettings"></a>

```python
rule_settings: ZeroTrustGatewayPolicyRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#rule_settings ZeroTrustGatewayPolicy#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyConfig.property.traffic"></a>

```python
traffic: str
```

- *Type:* str

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#traffic ZeroTrustGatewayPolicy#traffic}

---

### ZeroTrustGatewayPolicyRuleSettings <a name="ZeroTrustGatewayPolicyRuleSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings(
  add_headers: typing.Mapping[str] = None,
  allow_child_bypass: typing.Union[bool, IResolvable] = None,
  audit_ssh: ZeroTrustGatewayPolicyRuleSettingsAuditSsh = None,
  biso_admin_controls: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls = None,
  block_page_enabled: typing.Union[bool, IResolvable] = None,
  block_page_reason: str = None,
  bypass_parent_rule: typing.Union[bool, IResolvable] = None,
  check_session: ZeroTrustGatewayPolicyRuleSettingsCheckSession = None,
  dns_resolvers: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers = None,
  egress: ZeroTrustGatewayPolicyRuleSettingsEgress = None,
  ignore_cname_category_matches: typing.Union[bool, IResolvable] = None,
  insecure_disable_dnssec_validation: typing.Union[bool, IResolvable] = None,
  ip_categories: typing.Union[bool, IResolvable] = None,
  l4_override: ZeroTrustGatewayPolicyRuleSettingsL4Override = None,
  notification_settings: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings = None,
  override_host: str = None,
  override_ips: typing.List[str] = None,
  payload_log: ZeroTrustGatewayPolicyRuleSettingsPayloadLog = None,
  resolve_dns_through_cloudflare: typing.Union[bool, IResolvable] = None,
  untrusted_cert: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.addHeaders">add_headers</a></code> | <code>typing.Mapping[str]</code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.allowChildBypass">allow_child_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow parent MSP accounts to enable bypass their children's rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.auditSsh">audit_ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | audit_ssh block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bisoAdminControls">biso_admin_controls</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageEnabled">block_page_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageReason">block_page_reason</a></code> | <code>str</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bypassParentRule">bypass_parent_rule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow child MSP accounts to bypass their parent's rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.checkSession">check_session</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.dnsResolvers">dns_resolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | dns_resolvers block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ignoreCnameCategoryMatches">ignore_cname_category_matches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true, to ignore the category matches at CNAME domains in a response. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.insecureDisableDnssecValidation">insecure_disable_dnssec_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipCategories">ip_categories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turns on IP category based filter on dns if the rule contains dns category checks. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.l4Override">l4_override</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideHost">override_host</a></code> | <code>str</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideIps">override_ips</a></code> | <code>typing.List[str]</code> | The IPs to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsThroughCloudflare">resolve_dns_through_cloudflare</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.untrustedCert">untrusted_cert</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | untrusted_cert block. |

---

##### `add_headers`<sup>Optional</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.addHeaders"></a>

```python
add_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#add_headers ZeroTrustGatewayPolicy#add_headers}

---

##### `allow_child_bypass`<sup>Optional</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.allowChildBypass"></a>

```python
allow_child_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#allow_child_bypass ZeroTrustGatewayPolicy#allow_child_bypass}

---

##### `audit_ssh`<sup>Optional</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.auditSsh"></a>

```python
audit_ssh: ZeroTrustGatewayPolicyRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#audit_ssh ZeroTrustGatewayPolicy#audit_ssh}

---

##### `biso_admin_controls`<sup>Optional</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bisoAdminControls"></a>

```python
biso_admin_controls: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#biso_admin_controls ZeroTrustGatewayPolicy#biso_admin_controls}

---

##### `block_page_enabled`<sup>Optional</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageEnabled"></a>

```python
block_page_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#block_page_enabled ZeroTrustGatewayPolicy#block_page_enabled}

---

##### `block_page_reason`<sup>Optional</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.blockPageReason"></a>

```python
block_page_reason: str
```

- *Type:* str

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#block_page_reason ZeroTrustGatewayPolicy#block_page_reason}

---

##### `bypass_parent_rule`<sup>Optional</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.bypassParentRule"></a>

```python
bypass_parent_rule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#bypass_parent_rule ZeroTrustGatewayPolicy#bypass_parent_rule}

---

##### `check_session`<sup>Optional</sup> <a name="check_session" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.checkSession"></a>

```python
check_session: ZeroTrustGatewayPolicyRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#check_session ZeroTrustGatewayPolicy#check_session}

---

##### `dns_resolvers`<sup>Optional</sup> <a name="dns_resolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.dnsResolvers"></a>

```python
dns_resolvers: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

dns_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#dns_resolvers ZeroTrustGatewayPolicy#dns_resolvers}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.egress"></a>

```python
egress: ZeroTrustGatewayPolicyRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#egress ZeroTrustGatewayPolicy#egress}

---

##### `ignore_cname_category_matches`<sup>Optional</sup> <a name="ignore_cname_category_matches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ignoreCnameCategoryMatches"></a>

```python
ignore_cname_category_matches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true, to ignore the category matches at CNAME domains in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ignore_cname_category_matches ZeroTrustGatewayPolicy#ignore_cname_category_matches}

---

##### `insecure_disable_dnssec_validation`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.insecureDisableDnssecValidation"></a>

```python
insecure_disable_dnssec_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#insecure_disable_dnssec_validation ZeroTrustGatewayPolicy#insecure_disable_dnssec_validation}

---

##### `ip_categories`<sup>Optional</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.ipCategories"></a>

```python
ip_categories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip_categories ZeroTrustGatewayPolicy#ip_categories}

---

##### `l4_override`<sup>Optional</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.l4Override"></a>

```python
l4_override: ZeroTrustGatewayPolicyRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#l4override ZeroTrustGatewayPolicy#l4override}

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.notificationSettings"></a>

```python
notification_settings: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#notification_settings ZeroTrustGatewayPolicy#notification_settings}

---

##### `override_host`<sup>Optional</sup> <a name="override_host" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideHost"></a>

```python
override_host: str
```

- *Type:* str

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#override_host ZeroTrustGatewayPolicy#override_host}

---

##### `override_ips`<sup>Optional</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.overrideIps"></a>

```python
override_ips: typing.List[str]
```

- *Type:* typing.List[str]

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#override_ips ZeroTrustGatewayPolicy#override_ips}

---

##### `payload_log`<sup>Optional</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.payloadLog"></a>

```python
payload_log: ZeroTrustGatewayPolicyRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#payload_log ZeroTrustGatewayPolicy#payload_log}

---

##### `resolve_dns_through_cloudflare`<sup>Optional</sup> <a name="resolve_dns_through_cloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.resolveDnsThroughCloudflare"></a>

```python
resolve_dns_through_cloudflare: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#resolve_dns_through_cloudflare ZeroTrustGatewayPolicy#resolve_dns_through_cloudflare}

---

##### `untrusted_cert`<sup>Optional</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings.property.untrustedCert"></a>

```python
untrusted_cert: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#untrusted_cert ZeroTrustGatewayPolicy#untrusted_cert}

---

### ZeroTrustGatewayPolicyRuleSettingsAuditSsh <a name="ZeroTrustGatewayPolicyRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh(
  command_logging: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.property.commandLogging">command_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Log all SSH commands. |

---

##### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh.property.commandLogging"></a>

```python
command_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}

---

### ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls <a name="ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls(
  disable_clipboard_redirection: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableClipboardRedirection">disable_clipboard_redirection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable clipboard redirection. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableCopyPaste">disable_copy_paste</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable copy-paste. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableDownload">disable_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable download. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableKeyboard">disable_keyboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable keyboard usage. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disablePrinting">disable_printing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable printing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableUpload">disable_upload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable upload. |

---

##### `disable_clipboard_redirection`<sup>Optional</sup> <a name="disable_clipboard_redirection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableClipboardRedirection"></a>

```python
disable_clipboard_redirection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable clipboard redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_clipboard_redirection ZeroTrustGatewayPolicy#disable_clipboard_redirection}

---

##### `disable_copy_paste`<sup>Optional</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableCopyPaste"></a>

```python
disable_copy_paste: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable copy-paste.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_copy_paste ZeroTrustGatewayPolicy#disable_copy_paste}

---

##### `disable_download`<sup>Optional</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableDownload"></a>

```python
disable_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_download ZeroTrustGatewayPolicy#disable_download}

---

##### `disable_keyboard`<sup>Optional</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```python
disable_keyboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable keyboard usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_keyboard ZeroTrustGatewayPolicy#disable_keyboard}

---

##### `disable_printing`<sup>Optional</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```python
disable_printing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable printing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_printing ZeroTrustGatewayPolicy#disable_printing}

---

##### `disable_upload`<sup>Optional</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls.property.disableUpload"></a>

```python
disable_upload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_upload ZeroTrustGatewayPolicy#disable_upload}

---

### ZeroTrustGatewayPolicyRuleSettingsCheckSession <a name="ZeroTrustGatewayPolicyRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession(
  duration: str,
  enforce: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.duration">duration</a></code> | <code>str</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable session enforcement for this rule. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.duration"></a>

```python
duration: str
```

- *Type:* str

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolvers <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers(
  ipv4: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]] = None,
  ipv6: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv4">ipv4</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]</code> | ipv4 block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv6">ipv6</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]</code> | ipv6 block. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv4"></a>

```python
ipv4: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers.property.ipv6"></a>

```python
ipv6: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4(
  ip: str,
  port: typing.Union[int, float] = None,
  route_through_private_network: typing.Union[bool, IResolvable] = None,
  vnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.ip">ip</a></code> | <code>str</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.port">port</a></code> | <code>typing.Union[int, float]</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork">route_through_private_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.vnetId">vnet_id</a></code> | <code>str</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

##### `route_through_private_network`<sup>Optional</sup> <a name="route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork"></a>

```python
route_through_private_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}

---

##### `vnet_id`<sup>Optional</sup> <a name="vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}

---

### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6(
  ip: str,
  port: typing.Union[int, float] = None,
  route_through_private_network: typing.Union[bool, IResolvable] = None,
  vnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.ip">ip</a></code> | <code>str</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.port">port</a></code> | <code>typing.Union[int, float]</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork">route_through_private_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.vnetId">vnet_id</a></code> | <code>str</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

##### `route_through_private_network`<sup>Optional</sup> <a name="route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork"></a>

```python
route_through_private_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#route_through_private_network ZeroTrustGatewayPolicy#route_through_private_network}

---

##### `vnet_id`<sup>Optional</sup> <a name="vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#vnet_id ZeroTrustGatewayPolicy#vnet_id}

---

### ZeroTrustGatewayPolicyRuleSettingsEgress <a name="ZeroTrustGatewayPolicyRuleSettingsEgress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress(
  ipv4: str,
  ipv6: str,
  ipv4_fallback: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4">ipv4</a></code> | <code>str</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv6">ipv6</a></code> | <code>str</code> | The IPv6 range to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4Fallback">ipv4_fallback</a></code> | <code>str</code> | The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}

---

##### `ipv4_fallback`<sup>Optional</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress.property.ipv4Fallback"></a>

```python
ipv4_fallback: str
```

- *Type:* str

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}

---

### ZeroTrustGatewayPolicyRuleSettingsL4Override <a name="ZeroTrustGatewayPolicyRuleSettingsL4Override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override(
  ip: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.ip">ip</a></code> | <code>str</code> | Override IP to forward traffic to. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Override Port to forward traffic to. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.ip"></a>

```python
ip: str
```

- *Type:* str

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

### ZeroTrustGatewayPolicyRuleSettingsNotificationSettings <a name="ZeroTrustGatewayPolicyRuleSettingsNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings(
  enabled: typing.Union[bool, IResolvable] = None,
  message: str = None,
  support_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.message">message</a></code> | <code>str</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.supportUrl">support_url</a></code> | <code>str</code> | Support URL to show in the notification. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.message"></a>

```python
message: str
```

- *Type:* str

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#message ZeroTrustGatewayPolicy#message}

---

##### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}

---

### ZeroTrustGatewayPolicyRuleSettingsPayloadLog <a name="ZeroTrustGatewayPolicyRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable DLP Payload Logging for this rule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

### ZeroTrustGatewayPolicyRuleSettingsUntrustedCert <a name="ZeroTrustGatewayPolicyRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.property.action">action</a></code> | <code>str</code> | Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert.property.action"></a>

```python
action: str
```

- *Type:* str

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLoggingInput">command_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLogging">command_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_logging_input`<sup>Optional</sup> <a name="command_logging_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLoggingInput"></a>

```python
command_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```python
command_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

---


### ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableClipboardRedirection">reset_disable_clipboard_redirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste">reset_disable_copy_paste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload">reset_disable_download</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard">reset_disable_keyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting">reset_disable_printing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload">reset_disable_upload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_clipboard_redirection` <a name="reset_disable_clipboard_redirection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableClipboardRedirection"></a>

```python
def reset_disable_clipboard_redirection() -> None
```

##### `reset_disable_copy_paste` <a name="reset_disable_copy_paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste"></a>

```python
def reset_disable_copy_paste() -> None
```

##### `reset_disable_download` <a name="reset_disable_download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload"></a>

```python
def reset_disable_download() -> None
```

##### `reset_disable_keyboard` <a name="reset_disable_keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard"></a>

```python
def reset_disable_keyboard() -> None
```

##### `reset_disable_printing` <a name="reset_disable_printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting"></a>

```python
def reset_disable_printing() -> None
```

##### `reset_disable_upload` <a name="reset_disable_upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload"></a>

```python
def reset_disable_upload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirectionInput">disable_clipboard_redirection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput">disable_copy_paste_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput">disable_download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput">disable_keyboard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput">disable_printing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput">disable_upload_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirection">disable_clipboard_redirection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste">disable_copy_paste</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableDownload">disable_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard">disable_keyboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting">disable_printing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableUpload">disable_upload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_clipboard_redirection_input`<sup>Optional</sup> <a name="disable_clipboard_redirection_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirectionInput"></a>

```python
disable_clipboard_redirection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_copy_paste_input`<sup>Optional</sup> <a name="disable_copy_paste_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput"></a>

```python
disable_copy_paste_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_download_input`<sup>Optional</sup> <a name="disable_download_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput"></a>

```python
disable_download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_keyboard_input`<sup>Optional</sup> <a name="disable_keyboard_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput"></a>

```python
disable_keyboard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_printing_input`<sup>Optional</sup> <a name="disable_printing_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput"></a>

```python
disable_printing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_upload_input`<sup>Optional</sup> <a name="disable_upload_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput"></a>

```python
disable_upload_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_clipboard_redirection`<sup>Required</sup> <a name="disable_clipboard_redirection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableClipboardRedirection"></a>

```python
disable_clipboard_redirection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_copy_paste`<sup>Required</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste"></a>

```python
disable_copy_paste: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_download`<sup>Required</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableDownload"></a>

```python
disable_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_keyboard`<sup>Required</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard"></a>

```python
disable_keyboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_printing`<sup>Required</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting"></a>

```python
disable_printing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_upload`<sup>Required</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.disableUpload"></a>

```python
disable_upload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

---


### ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforceInput">enforce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```python
enforce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork">reset_route_through_private_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetVnetId">reset_vnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_route_through_private_network` <a name="reset_route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork"></a>

```python
def reset_route_through_private_network() -> None
```

##### `reset_vnet_id` <a name="reset_vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.resetVnetId"></a>

```python
def reset_vnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput">route_through_private_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput">vnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork">route_through_private_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetId">vnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_through_private_network_input`<sup>Optional</sup> <a name="route_through_private_network_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput"></a>

```python
route_through_private_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_id_input`<sup>Optional</sup> <a name="vnet_id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput"></a>

```python
vnet_id_input: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_through_private_network`<sup>Required</sup> <a name="route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork"></a>

```python
route_through_private_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_id`<sup>Required</sup> <a name="vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork">reset_route_through_private_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetVnetId">reset_vnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_route_through_private_network` <a name="reset_route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork"></a>

```python
def reset_route_through_private_network() -> None
```

##### `reset_vnet_id` <a name="reset_vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.resetVnetId"></a>

```python
def reset_vnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput">route_through_private_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput">vnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork">route_through_private_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetId">vnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_through_private_network_input`<sup>Optional</sup> <a name="route_through_private_network_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput"></a>

```python
route_through_private_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_id_input`<sup>Optional</sup> <a name="vnet_id_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput"></a>

```python
vnet_id_input: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_through_private_network`<sup>Required</sup> <a name="route_through_private_network" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork"></a>

```python
route_through_private_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_id`<sup>Required</sup> <a name="vnet_id" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]

---


### ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4">put_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6">put_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ipv4` <a name="put_ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4"></a>

```python
def put_ipv4(
  value: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv4.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]

---

##### `put_ipv6` <a name="put_ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6"></a>

```python
def put_ipv6(
  value: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.putIpv6.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]

---

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4"></a>

```python
ipv4: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6"></a>

```python
ipv6: ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List</a>

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv4Input"></a>

```python
ipv4_input: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.ipv6Input"></a>

```python
ipv6_input: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

---


### ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4Fallback">reset_ipv4_fallback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4_fallback` <a name="reset_ipv4_fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```python
def reset_ipv4_fallback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4FallbackInput">ipv4_fallback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Fallback">ipv4_fallback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_fallback_input`<sup>Optional</sup> <a name="ipv4_fallback_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```python
ipv4_fallback_input: str
```

- *Type:* str

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```python
ipv4_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv4_fallback`<sup>Required</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```python
ipv4_fallback: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

---


### ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

---


### ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetSupportUrl">reset_support_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_support_url` <a name="reset_support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.resetSupportUrl"></a>

```python
def reset_support_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput">support_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `support_url_input`<sup>Optional</sup> <a name="support_url_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput"></a>

```python
support_url_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

---


### ZeroTrustGatewayPolicyRuleSettingsOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh">put_audit_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls">put_biso_admin_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession">put_check_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers">put_dns_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override">put_l4_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog">put_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert">put_untrusted_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAddHeaders">reset_add_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAllowChildBypass">reset_allow_child_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAuditSsh">reset_audit_ssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBisoAdminControls">reset_biso_admin_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageEnabled">reset_block_page_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageReason">reset_block_page_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBypassParentRule">reset_bypass_parent_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetCheckSession">reset_check_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetDnsResolvers">reset_dns_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches">reset_ignore_cname_category_matches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">reset_insecure_disable_dnssec_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpCategories">reset_ip_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetL4Override">reset_l4_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideHost">reset_override_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideIps">reset_override_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetPayloadLog">reset_payload_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsThroughCloudflare">reset_resolve_dns_through_cloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetUntrustedCert">reset_untrusted_cert</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_ssh` <a name="put_audit_ssh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh"></a>

```python
def put_audit_ssh(
  command_logging: typing.Union[bool, IResolvable]
) -> None
```

###### `command_logging`<sup>Required</sup> <a name="command_logging" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putAuditSsh.parameter.commandLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#command_logging ZeroTrustGatewayPolicy#command_logging}

---

##### `put_biso_admin_controls` <a name="put_biso_admin_controls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls"></a>

```python
def put_biso_admin_controls(
  disable_clipboard_redirection: typing.Union[bool, IResolvable] = None,
  disable_copy_paste: typing.Union[bool, IResolvable] = None,
  disable_download: typing.Union[bool, IResolvable] = None,
  disable_keyboard: typing.Union[bool, IResolvable] = None,
  disable_printing: typing.Union[bool, IResolvable] = None,
  disable_upload: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disable_clipboard_redirection`<sup>Optional</sup> <a name="disable_clipboard_redirection" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disableClipboardRedirection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable clipboard redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_clipboard_redirection ZeroTrustGatewayPolicy#disable_clipboard_redirection}

---

###### `disable_copy_paste`<sup>Optional</sup> <a name="disable_copy_paste" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disableCopyPaste"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable copy-paste.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_copy_paste ZeroTrustGatewayPolicy#disable_copy_paste}

---

###### `disable_download`<sup>Optional</sup> <a name="disable_download" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disableDownload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_download ZeroTrustGatewayPolicy#disable_download}

---

###### `disable_keyboard`<sup>Optional</sup> <a name="disable_keyboard" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disableKeyboard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable keyboard usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_keyboard ZeroTrustGatewayPolicy#disable_keyboard}

---

###### `disable_printing`<sup>Optional</sup> <a name="disable_printing" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disablePrinting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable printing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_printing ZeroTrustGatewayPolicy#disable_printing}

---

###### `disable_upload`<sup>Optional</sup> <a name="disable_upload" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putBisoAdminControls.parameter.disableUpload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#disable_upload ZeroTrustGatewayPolicy#disable_upload}

---

##### `put_check_session` <a name="put_check_session" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession"></a>

```python
def put_check_session(
  duration: str,
  enforce: typing.Union[bool, IResolvable]
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession.parameter.duration"></a>

- *Type:* str

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#duration ZeroTrustGatewayPolicy#duration}

---

###### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putCheckSession.parameter.enforce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enforce ZeroTrustGatewayPolicy#enforce}

---

##### `put_dns_resolvers` <a name="put_dns_resolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers"></a>

```python
def put_dns_resolvers(
  ipv4: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4]] = None,
  ipv6: typing.Union[IResolvable, typing.List[ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6]] = None
) -> None
```

###### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers.parameter.ipv4"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4</a>]]

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}

---

###### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putDnsResolvers.parameter.ipv6"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6">ZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6</a>]]

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress"></a>

```python
def put_egress(
  ipv4: str,
  ipv6: str,
  ipv4_fallback: str = None
) -> None
```

###### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress.parameter.ipv4"></a>

- *Type:* str

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4 ZeroTrustGatewayPolicy#ipv4}

---

###### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress.parameter.ipv6"></a>

- *Type:* str

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv6 ZeroTrustGatewayPolicy#ipv6}

---

###### `ipv4_fallback`<sup>Optional</sup> <a name="ipv4_fallback" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putEgress.parameter.ipv4Fallback"></a>

- *Type:* str

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ipv4_fallback ZeroTrustGatewayPolicy#ipv4_fallback}

---

##### `put_l4_override` <a name="put_l4_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override"></a>

```python
def put_l4_override(
  ip: str,
  port: typing.Union[int, float]
) -> None
```

###### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override.parameter.ip"></a>

- *Type:* str

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#ip ZeroTrustGatewayPolicy#ip}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putL4Override.parameter.port"></a>

- *Type:* typing.Union[int, float]

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#port ZeroTrustGatewayPolicy#port}

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings"></a>

```python
def put_notification_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  message: str = None,
  support_url: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

###### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings.parameter.message"></a>

- *Type:* str

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#message ZeroTrustGatewayPolicy#message}

---

###### `support_url`<sup>Optional</sup> <a name="support_url" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putNotificationSettings.parameter.supportUrl"></a>

- *Type:* str

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#support_url ZeroTrustGatewayPolicy#support_url}

---

##### `put_payload_log` <a name="put_payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog"></a>

```python
def put_payload_log(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putPayloadLog.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#enabled ZeroTrustGatewayPolicy#enabled}

---

##### `put_untrusted_cert` <a name="put_untrusted_cert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert"></a>

```python
def put_untrusted_cert(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.putUntrustedCert.parameter.action"></a>

- *Type:* str

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_gateway_policy#action ZeroTrustGatewayPolicy#action}

---

##### `reset_add_headers` <a name="reset_add_headers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAddHeaders"></a>

```python
def reset_add_headers() -> None
```

##### `reset_allow_child_bypass` <a name="reset_allow_child_bypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAllowChildBypass"></a>

```python
def reset_allow_child_bypass() -> None
```

##### `reset_audit_ssh` <a name="reset_audit_ssh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetAuditSsh"></a>

```python
def reset_audit_ssh() -> None
```

##### `reset_biso_admin_controls` <a name="reset_biso_admin_controls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBisoAdminControls"></a>

```python
def reset_biso_admin_controls() -> None
```

##### `reset_block_page_enabled` <a name="reset_block_page_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```python
def reset_block_page_enabled() -> None
```

##### `reset_block_page_reason` <a name="reset_block_page_reason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBlockPageReason"></a>

```python
def reset_block_page_reason() -> None
```

##### `reset_bypass_parent_rule` <a name="reset_bypass_parent_rule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetBypassParentRule"></a>

```python
def reset_bypass_parent_rule() -> None
```

##### `reset_check_session` <a name="reset_check_session" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetCheckSession"></a>

```python
def reset_check_session() -> None
```

##### `reset_dns_resolvers` <a name="reset_dns_resolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetDnsResolvers"></a>

```python
def reset_dns_resolvers() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_ignore_cname_category_matches` <a name="reset_ignore_cname_category_matches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIgnoreCnameCategoryMatches"></a>

```python
def reset_ignore_cname_category_matches() -> None
```

##### `reset_insecure_disable_dnssec_validation` <a name="reset_insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```python
def reset_insecure_disable_dnssec_validation() -> None
```

##### `reset_ip_categories` <a name="reset_ip_categories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetIpCategories"></a>

```python
def reset_ip_categories() -> None
```

##### `reset_l4_override` <a name="reset_l4_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetL4Override"></a>

```python
def reset_l4_override() -> None
```

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```

##### `reset_override_host` <a name="reset_override_host" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideHost"></a>

```python
def reset_override_host() -> None
```

##### `reset_override_ips` <a name="reset_override_ips" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetOverrideIps"></a>

```python
def reset_override_ips() -> None
```

##### `reset_payload_log` <a name="reset_payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetPayloadLog"></a>

```python
def reset_payload_log() -> None
```

##### `reset_resolve_dns_through_cloudflare` <a name="reset_resolve_dns_through_cloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetResolveDnsThroughCloudflare"></a>

```python
def reset_resolve_dns_through_cloudflare() -> None
```

##### `reset_untrusted_cert` <a name="reset_untrusted_cert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.resetUntrustedCert"></a>

```python
def reset_untrusted_cert() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSsh">audit_ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference">ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControls">biso_admin_controls</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSession">check_session</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference">ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolvers">dns_resolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference">ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference">ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4Override">l4_override</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference">ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLog">payload_log</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference">ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCert">untrusted_cert</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference">ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeadersInput">add_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypassInput">allow_child_bypass_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSshInput">audit_ssh_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControlsInput">biso_admin_controls_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabledInput">block_page_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageReasonInput">block_page_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRuleInput">bypass_parent_rule_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSessionInput">check_session_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolversInput">dns_resolvers_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egressInput">egress_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput">ignore_cname_category_matches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">insecure_disable_dnssec_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategoriesInput">ip_categories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4OverrideInput">l4_override_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettingsInput">notification_settings_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHostInput">override_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIpsInput">override_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLogInput">payload_log_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput">resolve_dns_through_cloudflare_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCertInput">untrusted_cert_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeaders">add_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypass">allow_child_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabled">block_page_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageReason">block_page_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRule">bypass_parent_rule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatches">ignore_cname_category_matches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidation">insecure_disable_dnssec_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategories">ip_categories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHost">override_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIps">override_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflare">resolve_dns_through_cloudflare</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_ssh`<sup>Required</sup> <a name="audit_ssh" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSsh"></a>

```python
audit_ssh: ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference">ZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference</a>

---

##### `biso_admin_controls`<sup>Required</sup> <a name="biso_admin_controls" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControls"></a>

```python
biso_admin_controls: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `check_session`<sup>Required</sup> <a name="check_session" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSession"></a>

```python
check_session: ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference">ZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference</a>

---

##### `dns_resolvers`<sup>Required</sup> <a name="dns_resolvers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolvers"></a>

```python
dns_resolvers: ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference">ZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egress"></a>

```python
egress: ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference">ZeroTrustGatewayPolicyRuleSettingsEgressOutputReference</a>

---

##### `l4_override`<sup>Required</sup> <a name="l4_override" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4Override"></a>

```python
l4_override: ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference">ZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference</a>

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettings"></a>

```python
notification_settings: ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference">ZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference</a>

---

##### `payload_log`<sup>Required</sup> <a name="payload_log" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLog"></a>

```python
payload_log: ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference">ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference</a>

---

##### `untrusted_cert`<sup>Required</sup> <a name="untrusted_cert" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCert"></a>

```python
untrusted_cert: ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference">ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference</a>

---

##### `add_headers_input`<sup>Optional</sup> <a name="add_headers_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeadersInput"></a>

```python
add_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_child_bypass_input`<sup>Optional</sup> <a name="allow_child_bypass_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypassInput"></a>

```python
allow_child_bypass_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_ssh_input`<sup>Optional</sup> <a name="audit_ssh_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.auditSshInput"></a>

```python
audit_ssh_input: ZeroTrustGatewayPolicyRuleSettingsAuditSsh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsAuditSsh">ZeroTrustGatewayPolicyRuleSettingsAuditSsh</a>

---

##### `biso_admin_controls_input`<sup>Optional</sup> <a name="biso_admin_controls_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```python
biso_admin_controls_input: ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls">ZeroTrustGatewayPolicyRuleSettingsBisoAdminControls</a>

---

##### `block_page_enabled_input`<sup>Optional</sup> <a name="block_page_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```python
block_page_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_reason_input`<sup>Optional</sup> <a name="block_page_reason_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageReasonInput"></a>

```python
block_page_reason_input: str
```

- *Type:* str

---

##### `bypass_parent_rule_input`<sup>Optional</sup> <a name="bypass_parent_rule_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRuleInput"></a>

```python
bypass_parent_rule_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_session_input`<sup>Optional</sup> <a name="check_session_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.checkSessionInput"></a>

```python
check_session_input: ZeroTrustGatewayPolicyRuleSettingsCheckSession
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsCheckSession">ZeroTrustGatewayPolicyRuleSettingsCheckSession</a>

---

##### `dns_resolvers_input`<sup>Optional</sup> <a name="dns_resolvers_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.dnsResolversInput"></a>

```python
dns_resolvers_input: ZeroTrustGatewayPolicyRuleSettingsDnsResolvers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsDnsResolvers">ZeroTrustGatewayPolicyRuleSettingsDnsResolvers</a>

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.egressInput"></a>

```python
egress_input: ZeroTrustGatewayPolicyRuleSettingsEgress
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsEgress">ZeroTrustGatewayPolicyRuleSettingsEgress</a>

---

##### `ignore_cname_category_matches_input`<sup>Optional</sup> <a name="ignore_cname_category_matches_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatchesInput"></a>

```python
ignore_cname_category_matches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insecure_disable_dnssec_validation_input`<sup>Optional</sup> <a name="insecure_disable_dnssec_validation_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```python
insecure_disable_dnssec_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_categories_input`<sup>Optional</sup> <a name="ip_categories_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategoriesInput"></a>

```python
ip_categories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `l4_override_input`<sup>Optional</sup> <a name="l4_override_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.l4OverrideInput"></a>

```python
l4_override_input: ZeroTrustGatewayPolicyRuleSettingsL4Override
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsL4Override">ZeroTrustGatewayPolicyRuleSettingsL4Override</a>

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.notificationSettingsInput"></a>

```python
notification_settings_input: ZeroTrustGatewayPolicyRuleSettingsNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsNotificationSettings">ZeroTrustGatewayPolicyRuleSettingsNotificationSettings</a>

---

##### `override_host_input`<sup>Optional</sup> <a name="override_host_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHostInput"></a>

```python
override_host_input: str
```

- *Type:* str

---

##### `override_ips_input`<sup>Optional</sup> <a name="override_ips_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIpsInput"></a>

```python
override_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_log_input`<sup>Optional</sup> <a name="payload_log_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.payloadLogInput"></a>

```python
payload_log_input: ZeroTrustGatewayPolicyRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

---

##### `resolve_dns_through_cloudflare_input`<sup>Optional</sup> <a name="resolve_dns_through_cloudflare_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput"></a>

```python
resolve_dns_through_cloudflare_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `untrusted_cert_input`<sup>Optional</sup> <a name="untrusted_cert_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.untrustedCertInput"></a>

```python
untrusted_cert_input: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

---

##### `add_headers`<sup>Required</sup> <a name="add_headers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.addHeaders"></a>

```python
add_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_child_bypass`<sup>Required</sup> <a name="allow_child_bypass" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.allowChildBypass"></a>

```python
allow_child_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_enabled`<sup>Required</sup> <a name="block_page_enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageEnabled"></a>

```python
block_page_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_page_reason`<sup>Required</sup> <a name="block_page_reason" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.blockPageReason"></a>

```python
block_page_reason: str
```

- *Type:* str

---

##### `bypass_parent_rule`<sup>Required</sup> <a name="bypass_parent_rule" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.bypassParentRule"></a>

```python
bypass_parent_rule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_cname_category_matches`<sup>Required</sup> <a name="ignore_cname_category_matches" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ignoreCnameCategoryMatches"></a>

```python
ignore_cname_category_matches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insecure_disable_dnssec_validation`<sup>Required</sup> <a name="insecure_disable_dnssec_validation" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```python
insecure_disable_dnssec_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_categories`<sup>Required</sup> <a name="ip_categories" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.ipCategories"></a>

```python
ip_categories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_host`<sup>Required</sup> <a name="override_host" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideHost"></a>

```python
override_host: str
```

- *Type:* str

---

##### `override_ips`<sup>Required</sup> <a name="override_ips" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.overrideIps"></a>

```python
override_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolve_dns_through_cloudflare`<sup>Required</sup> <a name="resolve_dns_through_cloudflare" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.resolveDnsThroughCloudflare"></a>

```python
resolve_dns_through_cloudflare: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettings">ZeroTrustGatewayPolicyRuleSettings</a>

---


### ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsPayloadLog">ZeroTrustGatewayPolicyRuleSettingsPayloadLog</a>

---


### ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference <a name="ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_gateway_policy

zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustGatewayPolicyRuleSettingsUntrustedCert
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayPolicy.ZeroTrustGatewayPolicyRuleSettingsUntrustedCert">ZeroTrustGatewayPolicyRuleSettingsUntrustedCert</a>

---



