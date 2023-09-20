# `cloudflare_rate_limit`

Refer to the Terraform Registory for docs: [`cloudflare_rate_limit`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit).

# `rateLimit` Submodule <a name="`rateLimit` Submodule" id="@cdktf/provider-cloudflare.rateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RateLimit <a name="RateLimit" id="@cdktf/provider-cloudflare.rateLimit.RateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit cloudflare_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: RateLimitAction,
  period: typing.Union[int, float],
  threshold: typing.Union[int, float],
  zone_id: str,
  bypass_url_patterns: typing.List[str] = None,
  correlate: RateLimitCorrelate = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match: RateLimitMatch = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The time in seconds to count matching traffic. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold that triggers the rate limit mitigations, combine with period. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.bypassUrlPatterns">bypass_url_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | correlate block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.description">description</a></code> | <code>str</code> | A note that you can use to describe the reason for a rate limit. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this ratelimit is currently disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#id RateLimit#id}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | match block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#action RateLimit#action}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The time in seconds to count matching traffic.

If the count exceeds threshold within this period the action will be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#period RateLimit#period}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The threshold that triggers the rate limit mitigations, combine with period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#threshold RateLimit#threshold}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#zone_id RateLimit#zone_id}

---

##### `bypass_url_patterns`<sup>Optional</sup> <a name="bypass_url_patterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.bypassUrlPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}.

---

##### `correlate`<sup>Optional</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.correlate"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

correlate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#correlate RateLimit#correlate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.description"></a>

- *Type:* str

A note that you can use to describe the reason for a rate limit.

This value is sanitized and all tags are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#description RateLimit#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this ratelimit is currently disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#disabled RateLimit#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#id RateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#match RateLimit#match}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate">put_correlate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetBypassUrlPatterns">reset_bypass_url_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetCorrelate">reset_correlate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetMatch">reset_match</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_action` <a name="put_action" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction"></a>

```python
def put_action(
  mode: str,
  response: RateLimitActionResponse = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction.parameter.mode"></a>

- *Type:* str

The type of action to perform. Available values: `simulate`, `ban`, `challenge`, `js_challenge`, `managed_challenge`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#mode RateLimit#mode}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction.parameter.response"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#response RateLimit#response}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The time in seconds as an integer to perform the mitigation action.

This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#timeout RateLimit#timeout}

---

##### `put_correlate` <a name="put_correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate"></a>

```python
def put_correlate(
  by: str = None
) -> None
```

###### `by`<sup>Optional</sup> <a name="by" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate.parameter.by"></a>

- *Type:* str

If set to 'nat', NAT support will be enabled for rate limiting. Available values: `nat`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#by RateLimit#by}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch"></a>

```python
def put_match(
  request: RateLimitMatchRequest = None,
  response: RateLimitMatchResponse = None
) -> None
```

###### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch.parameter.request"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#request RateLimit#request}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch.parameter.response"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#response RateLimit#response}

---

##### `reset_bypass_url_patterns` <a name="reset_bypass_url_patterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetBypassUrlPatterns"></a>

```python
def reset_bypass_url_patterns() -> None
```

##### `reset_correlate` <a name="reset_correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetCorrelate"></a>

```python
def reset_correlate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetMatch"></a>

```python
def reset_match() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference">RateLimitActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference">RateLimitCorrelateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference">RateLimitMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatternsInput">bypass_url_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlateInput">correlate_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatterns">bypass_url_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.action"></a>

```python
action: RateLimitActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference">RateLimitActionOutputReference</a>

---

##### `correlate`<sup>Required</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlate"></a>

```python
correlate: RateLimitCorrelateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference">RateLimitCorrelateOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.match"></a>

```python
match: RateLimitMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference">RateLimitMatchOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.actionInput"></a>

```python
action_input: RateLimitAction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

---

##### `bypass_url_patterns_input`<sup>Optional</sup> <a name="bypass_url_patterns_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatternsInput"></a>

```python
bypass_url_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlate_input`<sup>Optional</sup> <a name="correlate_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlateInput"></a>

```python
correlate_input: RateLimitCorrelate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.matchInput"></a>

```python
match_input: RateLimitMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `bypass_url_patterns`<sup>Required</sup> <a name="bypass_url_patterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatterns"></a>

```python
bypass_url_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RateLimitAction <a name="RateLimitAction" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitAction(
  mode: str,
  response: RateLimitActionResponse = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.mode">mode</a></code> | <code>str</code> | The type of action to perform. Available values: `simulate`, `ban`, `challenge`, `js_challenge`, `managed_challenge`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The time in seconds as an integer to perform the mitigation action. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.mode"></a>

```python
mode: str
```

- *Type:* str

The type of action to perform. Available values: `simulate`, `ban`, `challenge`, `js_challenge`, `managed_challenge`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#mode RateLimit#mode}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.response"></a>

```python
response: RateLimitActionResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#response RateLimit#response}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in seconds as an integer to perform the mitigation action.

This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#timeout RateLimit#timeout}

---

### RateLimitActionResponse <a name="RateLimitActionResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitActionResponse(
  body: str,
  content_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.body">body</a></code> | <code>str</code> | The body to return, the content here should conform to the `content_type`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.contentType">content_type</a></code> | <code>str</code> | The content-type of the body. Available values: `text/plain`, `text/xml`, `application/json`. |

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.body"></a>

```python
body: str
```

- *Type:* str

The body to return, the content here should conform to the `content_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#body RateLimit#body}

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content-type of the body. Available values: `text/plain`, `text/xml`, `application/json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#content_type RateLimit#content_type}

---

### RateLimitConfig <a name="RateLimitConfig" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: RateLimitAction,
  period: typing.Union[int, float],
  threshold: typing.Union[int, float],
  zone_id: str,
  bypass_url_patterns: typing.List[str] = None,
  correlate: RateLimitCorrelate = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match: RateLimitMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The time in seconds to count matching traffic. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold that triggers the rate limit mitigations, combine with period. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.bypassUrlPatterns">bypass_url_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | correlate block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.description">description</a></code> | <code>str</code> | A note that you can use to describe the reason for a rate limit. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this ratelimit is currently disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#id RateLimit#id}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | match block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.action"></a>

```python
action: RateLimitAction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#action RateLimit#action}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in seconds to count matching traffic.

If the count exceeds threshold within this period the action will be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#period RateLimit#period}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold that triggers the rate limit mitigations, combine with period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#threshold RateLimit#threshold}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#zone_id RateLimit#zone_id}

---

##### `bypass_url_patterns`<sup>Optional</sup> <a name="bypass_url_patterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.bypassUrlPatterns"></a>

```python
bypass_url_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}.

---

##### `correlate`<sup>Optional</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.correlate"></a>

```python
correlate: RateLimitCorrelate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

correlate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#correlate RateLimit#correlate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A note that you can use to describe the reason for a rate limit.

This value is sanitized and all tags are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#description RateLimit#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this ratelimit is currently disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#disabled RateLimit#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#id RateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.match"></a>

```python
match: RateLimitMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#match RateLimit#match}

---

### RateLimitCorrelate <a name="RateLimitCorrelate" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitCorrelate(
  by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.property.by">by</a></code> | <code>str</code> | If set to 'nat', NAT support will be enabled for rate limiting. Available values: `nat`. |

---

##### `by`<sup>Optional</sup> <a name="by" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.property.by"></a>

```python
by: str
```

- *Type:* str

If set to 'nat', NAT support will be enabled for rate limiting. Available values: `nat`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#by RateLimit#by}

---

### RateLimitMatch <a name="RateLimitMatch" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatch(
  request: RateLimitMatchRequest = None,
  response: RateLimitMatchResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.request">request</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | response block. |

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.request"></a>

```python
request: RateLimitMatchRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#request RateLimit#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.response"></a>

```python
response: RateLimitMatchResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#response RateLimit#response}

---

### RateLimitMatchRequest <a name="RateLimitMatchRequest" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatchRequest(
  methods: typing.List[str] = None,
  schemes: typing.List[str] = None,
  url_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.methods">methods</a></code> | <code>typing.List[str]</code> | HTTP Methods to match traffic on. Available values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `_ALL_`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.schemes">schemes</a></code> | <code>typing.List[str]</code> | HTTP schemes to match traffic on. Available values: `HTTP`, `HTTPS`, `_ALL_`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.urlPattern">url_pattern</a></code> | <code>str</code> | The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use _ for all traffic to your zone. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

HTTP Methods to match traffic on. Available values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#methods RateLimit#methods}

---

##### `schemes`<sup>Optional</sup> <a name="schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.schemes"></a>

```python
schemes: typing.List[str]
```

- *Type:* typing.List[str]

HTTP schemes to match traffic on. Available values: `HTTP`, `HTTPS`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#schemes RateLimit#schemes}

---

##### `url_pattern`<sup>Optional</sup> <a name="url_pattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.urlPattern"></a>

```python
url_pattern: str
```

- *Type:* str

The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use _ for all traffic to your zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#url_pattern RateLimit#url_pattern}

---

### RateLimitMatchResponse <a name="RateLimitMatchResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatchResponse(
  headers: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  origin_traffic: typing.Union[bool, IResolvable] = None,
  statuses: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | List of HTTP headers maps to match the origin response on. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.originTraffic">origin_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only count traffic that has come from your origin servers. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.statuses">statuses</a></code> | <code>typing.List[typing.Union[int, float]]</code> | HTTP Status codes, can be one, many or indicate all by not providing this value. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

List of HTTP headers maps to match the origin response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#headers RateLimit#headers}

---

##### `origin_traffic`<sup>Optional</sup> <a name="origin_traffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.originTraffic"></a>

```python
origin_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only count traffic that has come from your origin servers.

If true, cached items that Cloudflare serve will not count towards rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#origin_traffic RateLimit#origin_traffic}

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.statuses"></a>

```python
statuses: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

HTTP Status codes, can be one, many or indicate all by not providing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#statuses RateLimit#statuses}

---

## Classes <a name="Classes" id="Classes"></a>

### RateLimitActionOutputReference <a name="RateLimitActionOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetResponse">reset_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_response` <a name="put_response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse"></a>

```python
def put_response(
  body: str,
  content_type: str
) -> None
```

###### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse.parameter.body"></a>

- *Type:* str

The body to return, the content here should conform to the `content_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#body RateLimit#body}

---

###### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse.parameter.contentType"></a>

- *Type:* str

The content-type of the body. Available values: `text/plain`, `text/xml`, `application/json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#content_type RateLimit#content_type}

---

##### `reset_response` <a name="reset_response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference">RateLimitActionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.responseInput">response_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.response"></a>

```python
response: RateLimitActionResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference">RateLimitActionResponseOutputReference</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.responseInput"></a>

```python
response_input: RateLimitActionResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitAction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

---


### RateLimitActionResponseOutputReference <a name="RateLimitActionResponseOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitActionResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitActionResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

---


### RateLimitCorrelateOutputReference <a name="RateLimitCorrelateOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitCorrelateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resetBy">reset_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_by` <a name="reset_by" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resetBy"></a>

```python
def reset_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.byInput">by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.by">by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `by_input`<sup>Optional</sup> <a name="by_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.byInput"></a>

```python
by_input: str
```

- *Type:* str

---

##### `by`<sup>Required</sup> <a name="by" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.by"></a>

```python
by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitCorrelate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

---


### RateLimitMatchOutputReference <a name="RateLimitMatchOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest">put_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request` <a name="put_request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest"></a>

```python
def put_request(
  methods: typing.List[str] = None,
  schemes: typing.List[str] = None,
  url_pattern: str = None
) -> None
```

###### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest.parameter.methods"></a>

- *Type:* typing.List[str]

HTTP Methods to match traffic on. Available values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#methods RateLimit#methods}

---

###### `schemes`<sup>Optional</sup> <a name="schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest.parameter.schemes"></a>

- *Type:* typing.List[str]

HTTP schemes to match traffic on. Available values: `HTTP`, `HTTPS`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#schemes RateLimit#schemes}

---

###### `url_pattern`<sup>Optional</sup> <a name="url_pattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest.parameter.urlPattern"></a>

- *Type:* str

The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use _ for all traffic to your zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#url_pattern RateLimit#url_pattern}

---

##### `put_response` <a name="put_response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse"></a>

```python
def put_response(
  headers: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  origin_traffic: typing.Union[bool, IResolvable] = None,
  statuses: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

List of HTTP headers maps to match the origin response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#headers RateLimit#headers}

---

###### `origin_traffic`<sup>Optional</sup> <a name="origin_traffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse.parameter.originTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only count traffic that has come from your origin servers.

If true, cached items that Cloudflare serve will not count towards rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#origin_traffic RateLimit#origin_traffic}

---

###### `statuses`<sup>Optional</sup> <a name="statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse.parameter.statuses"></a>

- *Type:* typing.List[typing.Union[int, float]]

HTTP Status codes, can be one, many or indicate all by not providing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.15.0/docs/resources/rate_limit#statuses RateLimit#statuses}

---

##### `reset_request` <a name="reset_request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.request">request</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference">RateLimitMatchRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference">RateLimitMatchResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.requestInput">request_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.responseInput">response_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.request"></a>

```python
request: RateLimitMatchRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference">RateLimitMatchRequestOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.response"></a>

```python
response: RateLimitMatchResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference">RateLimitMatchResponseOutputReference</a>

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.requestInput"></a>

```python
request_input: RateLimitMatchRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.responseInput"></a>

```python
response_input: RateLimitMatchResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitMatch
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

---


### RateLimitMatchRequestOutputReference <a name="RateLimitMatchRequestOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatchRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetSchemes">reset_schemes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetUrlPattern">reset_url_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_schemes` <a name="reset_schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetSchemes"></a>

```python
def reset_schemes() -> None
```

##### `reset_url_pattern` <a name="reset_url_pattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetUrlPattern"></a>

```python
def reset_url_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemesInput">schemes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPatternInput">url_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemes">schemes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPattern">url_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schemes_input`<sup>Optional</sup> <a name="schemes_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemesInput"></a>

```python
schemes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_pattern_input`<sup>Optional</sup> <a name="url_pattern_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPatternInput"></a>

```python
url_pattern_input: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schemes`<sup>Required</sup> <a name="schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemes"></a>

```python
schemes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_pattern`<sup>Required</sup> <a name="url_pattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPattern"></a>

```python
url_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitMatchRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

---


### RateLimitMatchResponseOutputReference <a name="RateLimitMatchResponseOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import rate_limit

rateLimit.RateLimitMatchResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetOriginTraffic">reset_origin_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetStatuses">reset_statuses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_origin_traffic` <a name="reset_origin_traffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetOriginTraffic"></a>

```python
def reset_origin_traffic() -> None
```

##### `reset_statuses` <a name="reset_statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetStatuses"></a>

```python
def reset_statuses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTrafficInput">origin_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statusesInput">statuses_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTraffic">origin_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statuses">statuses</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `origin_traffic_input`<sup>Optional</sup> <a name="origin_traffic_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTrafficInput"></a>

```python
origin_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statuses_input`<sup>Optional</sup> <a name="statuses_input" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statusesInput"></a>

```python
statuses_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `origin_traffic`<sup>Required</sup> <a name="origin_traffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTraffic"></a>

```python
origin_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statuses`<sup>Required</sup> <a name="statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statuses"></a>

```python
statuses: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.internalValue"></a>

```python
internal_value: RateLimitMatchResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

---



