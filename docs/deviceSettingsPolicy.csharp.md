# `cloudflare_device_settings_policy`

Refer to the Terraform Registory for docs: [`cloudflare_device_settings_policy`](https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy).

# `deviceSettingsPolicy` Submodule <a name="`deviceSettingsPolicy` Submodule" id="@cdktf/provider-cloudflare.deviceSettingsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeviceSettingsPolicy <a name="DeviceSettingsPolicy" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy cloudflare_device_settings_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DeviceSettingsPolicy(Construct Scope, string Id, DeviceSettingsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave">ResetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch">ResetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates">ResetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect">ResetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal">ResetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback">ResetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps">ResetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence">ResetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode">ResetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port">ResetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked">ResetSwitchLocked</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowedToLeave` <a name="ResetAllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave"></a>

```csharp
private void ResetAllowedToLeave()
```

##### `ResetAllowModeSwitch` <a name="ResetAllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch"></a>

```csharp
private void ResetAllowModeSwitch()
```

##### `ResetAllowUpdates` <a name="ResetAllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates"></a>

```csharp
private void ResetAllowUpdates()
```

##### `ResetAutoConnect` <a name="ResetAutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect"></a>

```csharp
private void ResetAutoConnect()
```

##### `ResetCaptivePortal` <a name="ResetCaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal"></a>

```csharp
private void ResetCaptivePortal()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDisableAutoFallback` <a name="ResetDisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback"></a>

```csharp
private void ResetDisableAutoFallback()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExcludeOfficeIps` <a name="ResetExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps"></a>

```csharp
private void ResetExcludeOfficeIps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetPrecedence` <a name="ResetPrecedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence"></a>

```csharp
private void ResetPrecedence()
```

##### `ResetServiceModeV2Mode` <a name="ResetServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode"></a>

```csharp
private void ResetServiceModeV2Mode()
```

##### `ResetServiceModeV2Port` <a name="ResetServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port"></a>

```csharp
private void ResetServiceModeV2Port()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```

##### `ResetSwitchLocked` <a name="ResetSwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked"></a>

```csharp
private void ResetSwitchLocked()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DeviceSettingsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DeviceSettingsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DeviceSettingsPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput">AllowedToLeaveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput">AllowModeSwitchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput">AllowUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput">AutoConnectInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput">CaptivePortalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput">DisableAutoFallbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput">ExcludeOfficeIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput">ServiceModeV2ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput">ServiceModeV2PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput">SwitchLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave">AllowedToLeave</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates">AllowUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect">AutoConnect</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal">CaptivePortal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked">SwitchLocked</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedToLeaveInput`<sup>Optional</sup> <a name="AllowedToLeaveInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput"></a>

```csharp
public object AllowedToLeaveInput { get; }
```

- *Type:* object

---

##### `AllowModeSwitchInput`<sup>Optional</sup> <a name="AllowModeSwitchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput"></a>

```csharp
public object AllowModeSwitchInput { get; }
```

- *Type:* object

---

##### `AllowUpdatesInput`<sup>Optional</sup> <a name="AllowUpdatesInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput"></a>

```csharp
public object AllowUpdatesInput { get; }
```

- *Type:* object

---

##### `AutoConnectInput`<sup>Optional</sup> <a name="AutoConnectInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput"></a>

```csharp
public double AutoConnectInput { get; }
```

- *Type:* double

---

##### `CaptivePortalInput`<sup>Optional</sup> <a name="CaptivePortalInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput"></a>

```csharp
public double CaptivePortalInput { get; }
```

- *Type:* double

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `DisableAutoFallbackInput`<sup>Optional</sup> <a name="DisableAutoFallbackInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput"></a>

```csharp
public object DisableAutoFallbackInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExcludeOfficeIpsInput`<sup>Optional</sup> <a name="ExcludeOfficeIpsInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput"></a>

```csharp
public object ExcludeOfficeIpsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `ServiceModeV2ModeInput`<sup>Optional</sup> <a name="ServiceModeV2ModeInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput"></a>

```csharp
public string ServiceModeV2ModeInput { get; }
```

- *Type:* string

---

##### `ServiceModeV2PortInput`<sup>Optional</sup> <a name="ServiceModeV2PortInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput"></a>

```csharp
public double ServiceModeV2PortInput { get; }
```

- *Type:* double

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `SwitchLockedInput`<sup>Optional</sup> <a name="SwitchLockedInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput"></a>

```csharp
public object SwitchLockedInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave"></a>

```csharp
public object AllowedToLeave { get; }
```

- *Type:* object

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch"></a>

```csharp
public object AllowModeSwitch { get; }
```

- *Type:* object

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates"></a>

```csharp
public object AllowUpdates { get; }
```

- *Type:* object

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect"></a>

```csharp
public double AutoConnect { get; }
```

- *Type:* double

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal"></a>

```csharp
public double CaptivePortal { get; }
```

- *Type:* double

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback"></a>

```csharp
public object DisableAutoFallback { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps"></a>

```csharp
public object ExcludeOfficeIps { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `ServiceModeV2Mode`<sup>Required</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode"></a>

```csharp
public string ServiceModeV2Mode { get; }
```

- *Type:* string

---

##### `ServiceModeV2Port`<sup>Required</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port"></a>

```csharp
public double ServiceModeV2Port { get; }
```

- *Type:* double

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked"></a>

```csharp
public object SwitchLocked { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeviceSettingsPolicyConfig <a name="DeviceSettingsPolicyConfig" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DeviceSettingsPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    object AllowedToLeave = null,
    object AllowModeSwitch = null,
    object AllowUpdates = null,
    double AutoConnect = null,
    double CaptivePortal = null,
    object Default = null,
    object DisableAutoFallback = null,
    object Enabled = null,
    object ExcludeOfficeIps = null,
    string Id = null,
    string Match = null,
    double Precedence = null,
    string ServiceModeV2Mode = null,
    double ServiceModeV2Port = null,
    string SupportUrl = null,
    object SwitchLocked = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave">AllowedToLeave</a></code> | <code>object</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>object</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates">AllowUpdates</a></code> | <code>object</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect">AutoConnect</a></code> | <code>double</code> | The amount of time in minutes to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal">CaptivePortal</a></code> | <code>double</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default">Default</a></code> | <code>object</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>object</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>object</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#id DeviceSettingsPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match">Match</a></code> | <code>string</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence">Precedence</a></code> | <code>double</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>string</code> | The service mode. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>double</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl">SupportUrl</a></code> | <code>string</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked">SwitchLocked</a></code> | <code>object</code> | Enablement of the ZT client switch lock. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#account_id DeviceSettingsPolicy#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#name DeviceSettingsPolicy#name}

---

##### `AllowedToLeave`<sup>Optional</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave"></a>

```csharp
public object AllowedToLeave { get; set; }
```

- *Type:* object

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}

---

##### `AllowModeSwitch`<sup>Optional</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch"></a>

```csharp
public object AllowModeSwitch { get; set; }
```

- *Type:* object

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}

---

##### `AllowUpdates`<sup>Optional</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates"></a>

```csharp
public object AllowUpdates { get; set; }
```

- *Type:* object

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}

---

##### `AutoConnect`<sup>Optional</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect"></a>

```csharp
public double AutoConnect { get; set; }
```

- *Type:* double

The amount of time in minutes to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}

---

##### `CaptivePortal`<sup>Optional</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal"></a>

```csharp
public double CaptivePortal { get; set; }
```

- *Type:* double

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#default DeviceSettingsPolicy#default}

---

##### `DisableAutoFallback`<sup>Optional</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback"></a>

```csharp
public object DisableAutoFallback { get; set; }
```

- *Type:* object

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#enabled DeviceSettingsPolicy#enabled}

---

##### `ExcludeOfficeIps`<sup>Optional</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps"></a>

```csharp
public object ExcludeOfficeIps { get; set; }
```

- *Type:* object

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#id DeviceSettingsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#match DeviceSettingsPolicy#match}

---

##### `Precedence`<sup>Optional</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#precedence DeviceSettingsPolicy#precedence}

---

##### `ServiceModeV2Mode`<sup>Optional</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode"></a>

```csharp
public string ServiceModeV2Mode { get; set; }
```

- *Type:* string

The service mode. Defaults to `warp`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}

---

##### `ServiceModeV2Port`<sup>Optional</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port"></a>

```csharp
public double ServiceModeV2Port { get; set; }
```

- *Type:* double

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#support_url DeviceSettingsPolicy#support_url}

---

##### `SwitchLocked`<sup>Optional</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked"></a>

```csharp
public object SwitchLocked { get; set; }
```

- *Type:* object

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}

---



