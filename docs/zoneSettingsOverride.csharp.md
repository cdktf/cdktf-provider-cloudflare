# `cloudflare_zone_settings_override`

Refer to the Terraform Registory for docs: [`cloudflare_zone_settings_override`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override).

# `zoneSettingsOverride` Submodule <a name="`zoneSettingsOverride` Submodule" id="@cdktf/provider-cloudflare.zoneSettingsOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSettingsOverride <a name="ZoneSettingsOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override cloudflare_zone_settings_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverride(Construct Scope, string Id, ZoneSettingsOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings"></a>

```csharp
private void PutSettings(ZoneSettingsOverrideSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings"></a>

```csharp
private void ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSettingsOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSettingsOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSettingsOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings">InitialSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt">InitialSettingsReadAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings">ReadonlySettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus">ZoneStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType">ZoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InitialSettings`<sup>Required</sup> <a name="InitialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsList InitialSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a>

---

##### `InitialSettingsReadAt`<sup>Required</sup> <a name="InitialSettingsReadAt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt"></a>

```csharp
public string InitialSettingsReadAt { get; }
```

- *Type:* string

---

##### `ReadonlySettings`<sup>Required</sup> <a name="ReadonlySettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings"></a>

```csharp
public string[] ReadonlySettings { get; }
```

- *Type:* string[]

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings"></a>

```csharp
public ZoneSettingsOverrideSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a>

---

##### `ZoneStatus`<sup>Required</sup> <a name="ZoneStatus" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus"></a>

```csharp
public string ZoneStatus { get; }
```

- *Type:* string

---

##### `ZoneType`<sup>Required</sup> <a name="ZoneType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType"></a>

```csharp
public string ZoneType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput"></a>

```csharp
public ZoneSettingsOverrideSettings SettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSettingsOverrideConfig <a name="ZoneSettingsOverrideConfig" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    string Id = null,
    ZoneSettingsOverrideSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#zone_id ZoneSettingsOverride#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings"></a>

```csharp
public ZoneSettingsOverrideSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#settings ZoneSettingsOverride#settings}

---

### ZoneSettingsOverrideInitialSettings <a name="ZoneSettingsOverrideInitialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettings {

};
```


### ZoneSettingsOverrideInitialSettingsMinify <a name="ZoneSettingsOverrideInitialSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMinify {

};
```


### ZoneSettingsOverrideInitialSettingsMobileRedirect <a name="ZoneSettingsOverrideInitialSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMobileRedirect {

};
```


### ZoneSettingsOverrideInitialSettingsSecurityHeader <a name="ZoneSettingsOverrideInitialSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsSecurityHeader {

};
```


### ZoneSettingsOverrideSettings <a name="ZoneSettingsOverrideSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettings {
    string AlwaysOnline = null,
    string AlwaysUseHttps = null,
    string AutomaticHttpsRewrites = null,
    string BinaryAst = null,
    string Brotli = null,
    double BrowserCacheTtl = null,
    string BrowserCheck = null,
    string CacheLevel = null,
    double ChallengeTtl = null,
    string[] Ciphers = null,
    string CnameFlattening = null,
    string DevelopmentMode = null,
    string EarlyHints = null,
    string EmailObfuscation = null,
    string FilterLogsToCloudflare = null,
    string H2Prioritization = null,
    string HotlinkProtection = null,
    string Http2 = null,
    string Http3 = null,
    string ImageResizing = null,
    string IpGeolocation = null,
    string Ipv6 = null,
    string LogToCloudflare = null,
    double MaxUpload = null,
    ZoneSettingsOverrideSettingsMinify Minify = null,
    string MinTlsVersion = null,
    string Mirage = null,
    ZoneSettingsOverrideSettingsMobileRedirect MobileRedirect = null,
    string OpportunisticEncryption = null,
    string OpportunisticOnion = null,
    string OrangeToOrange = null,
    string OriginErrorPagePassThru = null,
    string OriginMaxHttpVersion = null,
    string Polish = null,
    string PrefetchPreload = null,
    string PrivacyPass = null,
    string ProxyReadTimeout = null,
    string PseudoIpv4 = null,
    string ResponseBuffering = null,
    string RocketLoader = null,
    ZoneSettingsOverrideSettingsSecurityHeader SecurityHeader = null,
    string SecurityLevel = null,
    string ServerSideExclude = null,
    string SortQueryStringForCache = null,
    string Ssl = null,
    string Tls12Only = null,
    string Tls13 = null,
    string TlsClientAuth = null,
    string TrueClientIpHeader = null,
    string UniversalSsl = null,
    string VisitorIp = null,
    string Waf = null,
    string Webp = null,
    string Websockets = null,
    string ZeroRtt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline">AlwaysOnline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst">BinaryAst</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli">Brotli</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck">BrowserCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel">CacheLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl">ChallengeTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers">Ciphers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening">CnameFlattening</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode">DevelopmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints">EarlyHints</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation">EmailObfuscation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization">H2Prioritization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection">HotlinkProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2">Http2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3">Http3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing">ImageResizing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation">IpGeolocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6">Ipv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare">LogToCloudflare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload">MaxUpload</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage">Mirage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | mobile_redirect block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange">OrangeToOrange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish">Polish</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload">PrefetchPreload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass">PrivacyPass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4">PseudoIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering">ResponseBuffering</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader">RocketLoader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | security_header block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude">ServerSideExclude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl">Ssl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only">Tls12Only</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13">Tls13</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth">TlsClientAuth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl">UniversalSsl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp">VisitorIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf">Waf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp">Webp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets">Websockets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt">ZeroRtt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}. |

---

##### `AlwaysOnline`<sup>Optional</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline"></a>

```csharp
public string AlwaysOnline { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}.

---

##### `AlwaysUseHttps`<sup>Optional</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps"></a>

```csharp
public string AlwaysUseHttps { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}.

---

##### `AutomaticHttpsRewrites`<sup>Optional</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites"></a>

```csharp
public string AutomaticHttpsRewrites { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}.

---

##### `BinaryAst`<sup>Optional</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst"></a>

```csharp
public string BinaryAst { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}.

---

##### `Brotli`<sup>Optional</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli"></a>

```csharp
public string Brotli { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}.

---

##### `BrowserCacheTtl`<sup>Optional</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl"></a>

```csharp
public double BrowserCacheTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}.

---

##### `BrowserCheck`<sup>Optional</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck"></a>

```csharp
public string BrowserCheck { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}.

---

##### `CacheLevel`<sup>Optional</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel"></a>

```csharp
public string CacheLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}.

---

##### `ChallengeTtl`<sup>Optional</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl"></a>

```csharp
public double ChallengeTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}.

---

##### `Ciphers`<sup>Optional</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers"></a>

```csharp
public string[] Ciphers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}.

---

##### `CnameFlattening`<sup>Optional</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening"></a>

```csharp
public string CnameFlattening { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}.

---

##### `DevelopmentMode`<sup>Optional</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode"></a>

```csharp
public string DevelopmentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}.

---

##### `EarlyHints`<sup>Optional</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints"></a>

```csharp
public string EarlyHints { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}.

---

##### `EmailObfuscation`<sup>Optional</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation"></a>

```csharp
public string EmailObfuscation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}.

---

##### `FilterLogsToCloudflare`<sup>Optional</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare"></a>

```csharp
public string FilterLogsToCloudflare { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}.

---

##### `H2Prioritization`<sup>Optional</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization"></a>

```csharp
public string H2Prioritization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}.

---

##### `HotlinkProtection`<sup>Optional</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection"></a>

```csharp
public string HotlinkProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}.

---

##### `Http2`<sup>Optional</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2"></a>

```csharp
public string Http2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}.

---

##### `Http3`<sup>Optional</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3"></a>

```csharp
public string Http3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}.

---

##### `ImageResizing`<sup>Optional</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing"></a>

```csharp
public string ImageResizing { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}.

---

##### `IpGeolocation`<sup>Optional</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation"></a>

```csharp
public string IpGeolocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6"></a>

```csharp
public string Ipv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}.

---

##### `LogToCloudflare`<sup>Optional</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare"></a>

```csharp
public string LogToCloudflare { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}.

---

##### `MaxUpload`<sup>Optional</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload"></a>

```csharp
public double MaxUpload { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}.

---

##### `Minify`<sup>Optional</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify"></a>

```csharp
public ZoneSettingsOverrideSettingsMinify Minify { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#minify ZoneSettingsOverride#minify}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}.

---

##### `Mirage`<sup>Optional</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage"></a>

```csharp
public string Mirage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}.

---

##### `MobileRedirect`<sup>Optional</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect"></a>

```csharp
public ZoneSettingsOverrideSettingsMobileRedirect MobileRedirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

mobile_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#mobile_redirect ZoneSettingsOverride#mobile_redirect}

---

##### `OpportunisticEncryption`<sup>Optional</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption"></a>

```csharp
public string OpportunisticEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}.

---

##### `OpportunisticOnion`<sup>Optional</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion"></a>

```csharp
public string OpportunisticOnion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}.

---

##### `OrangeToOrange`<sup>Optional</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange"></a>

```csharp
public string OrangeToOrange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}.

---

##### `OriginErrorPagePassThru`<sup>Optional</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru"></a>

```csharp
public string OriginErrorPagePassThru { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}.

---

##### `OriginMaxHttpVersion`<sup>Optional</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion"></a>

```csharp
public string OriginMaxHttpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}.

---

##### `Polish`<sup>Optional</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish"></a>

```csharp
public string Polish { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}.

---

##### `PrefetchPreload`<sup>Optional</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload"></a>

```csharp
public string PrefetchPreload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}.

---

##### `PrivacyPass`<sup>Optional</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass"></a>

```csharp
public string PrivacyPass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}.

---

##### `ProxyReadTimeout`<sup>Optional</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout"></a>

```csharp
public string ProxyReadTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}.

---

##### `PseudoIpv4`<sup>Optional</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4"></a>

```csharp
public string PseudoIpv4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}.

---

##### `ResponseBuffering`<sup>Optional</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering"></a>

```csharp
public string ResponseBuffering { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}.

---

##### `RocketLoader`<sup>Optional</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader"></a>

```csharp
public string RocketLoader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}.

---

##### `SecurityHeader`<sup>Optional</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader"></a>

```csharp
public ZoneSettingsOverrideSettingsSecurityHeader SecurityHeader { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

security_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#security_header ZoneSettingsOverride#security_header}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}.

---

##### `ServerSideExclude`<sup>Optional</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude"></a>

```csharp
public string ServerSideExclude { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}.

---

##### `SortQueryStringForCache`<sup>Optional</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache"></a>

```csharp
public string SortQueryStringForCache { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl"></a>

```csharp
public string Ssl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}.

---

##### `Tls12Only`<sup>Optional</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only"></a>

```csharp
public string Tls12Only { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}.

---

##### `Tls13`<sup>Optional</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13"></a>

```csharp
public string Tls13 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}.

---

##### `TlsClientAuth`<sup>Optional</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth"></a>

```csharp
public string TlsClientAuth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}.

---

##### `TrueClientIpHeader`<sup>Optional</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader"></a>

```csharp
public string TrueClientIpHeader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}.

---

##### `UniversalSsl`<sup>Optional</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl"></a>

```csharp
public string UniversalSsl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}.

---

##### `VisitorIp`<sup>Optional</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp"></a>

```csharp
public string VisitorIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}.

---

##### `Waf`<sup>Optional</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf"></a>

```csharp
public string Waf { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}.

---

##### `Webp`<sup>Optional</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp"></a>

```csharp
public string Webp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}.

---

##### `Websockets`<sup>Optional</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets"></a>

```csharp
public string Websockets { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}.

---

##### `ZeroRtt`<sup>Optional</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt"></a>

```csharp
public string ZeroRtt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}.

---

### ZoneSettingsOverrideSettingsMinify <a name="ZoneSettingsOverrideSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsMinify {
    string Css,
    string Html,
    string Js
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css">Css</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html">Html</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js">Js</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}. |

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css"></a>

```csharp
public string Css { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}.

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html"></a>

```csharp
public string Html { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}.

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js"></a>

```csharp
public string Js { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}.

---

### ZoneSettingsOverrideSettingsMobileRedirect <a name="ZoneSettingsOverrideSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsMobileRedirect {
    string MobileSubdomain,
    string Status,
    object StripUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain">MobileSubdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri">StripUri</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}. |

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain"></a>

```csharp
public string MobileSubdomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}.

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri"></a>

```csharp
public object StripUri { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}.

---

### ZoneSettingsOverrideSettingsSecurityHeader <a name="ZoneSettingsOverrideSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsSecurityHeader {
    object Enabled = null,
    object IncludeSubdomains = null,
    double MaxAge = null,
    object Nosniff = null,
    object Preload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains">IncludeSubdomains</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff">Nosniff</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload">Preload</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}.

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains"></a>

```csharp
public object IncludeSubdomains { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}.

---

##### `Nosniff`<sup>Optional</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff"></a>

```csharp
public object Nosniff { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}.

---

##### `Preload`<sup>Optional</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload"></a>

```csharp
public object Preload { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.11.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSettingsOverrideInitialSettingsList <a name="ZoneSettingsOverrideInitialSettingsList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get"></a>

```csharp
private ZoneSettingsOverrideInitialSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMinifyList <a name="ZoneSettingsOverrideInitialSettingsMinifyList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMinifyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get"></a>

```csharp
private ZoneSettingsOverrideInitialSettingsMinifyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMinifyOutputReference <a name="ZoneSettingsOverrideInitialSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMinifyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css">Css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js">Js</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css"></a>

```csharp
public string Css { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js"></a>

```csharp
public string Js { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsMinify InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a>

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectList <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMobileRedirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get"></a>

```csharp
private ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain">MobileSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri">StripUri</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```csharp
public string MobileSubdomain { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri"></a>

```csharp
public IResolvable StripUri { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsMobileRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideInitialSettingsOutputReference <a name="ZoneSettingsOverrideInitialSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline">AlwaysOnline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst">BinaryAst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli">Brotli</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck">BrowserCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel">CacheLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl">ChallengeTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening">CnameFlattening</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode">DevelopmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization">H2Prioritization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2">Http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3">Http3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing">ImageResizing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation">IpGeolocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare">LogToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload">MaxUpload</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage">Mirage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange">OrangeToOrange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish">Polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload">PrefetchPreload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass">PrivacyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4">PseudoIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering">ResponseBuffering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude">ServerSideExclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl">Ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only">Tls12Only</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13">Tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth">TlsClientAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl">UniversalSsl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp">VisitorIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf">Waf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp">Webp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets">Websockets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt">ZeroRtt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysOnline`<sup>Required</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline"></a>

```csharp
public string AlwaysOnline { get; }
```

- *Type:* string

---

##### `AlwaysUseHttps`<sup>Required</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps"></a>

```csharp
public string AlwaysUseHttps { get; }
```

- *Type:* string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites"></a>

```csharp
public string AutomaticHttpsRewrites { get; }
```

- *Type:* string

---

##### `BinaryAst`<sup>Required</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst"></a>

```csharp
public string BinaryAst { get; }
```

- *Type:* string

---

##### `Brotli`<sup>Required</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli"></a>

```csharp
public string Brotli { get; }
```

- *Type:* string

---

##### `BrowserCacheTtl`<sup>Required</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl"></a>

```csharp
public double BrowserCacheTtl { get; }
```

- *Type:* double

---

##### `BrowserCheck`<sup>Required</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck"></a>

```csharp
public string BrowserCheck { get; }
```

- *Type:* string

---

##### `CacheLevel`<sup>Required</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel"></a>

```csharp
public string CacheLevel { get; }
```

- *Type:* string

---

##### `ChallengeTtl`<sup>Required</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl"></a>

```csharp
public double ChallengeTtl { get; }
```

- *Type:* double

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers"></a>

```csharp
public string[] Ciphers { get; }
```

- *Type:* string[]

---

##### `CnameFlattening`<sup>Required</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening"></a>

```csharp
public string CnameFlattening { get; }
```

- *Type:* string

---

##### `DevelopmentMode`<sup>Required</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode"></a>

```csharp
public string DevelopmentMode { get; }
```

- *Type:* string

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints"></a>

```csharp
public string EarlyHints { get; }
```

- *Type:* string

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation"></a>

```csharp
public string EmailObfuscation { get; }
```

- *Type:* string

---

##### `FilterLogsToCloudflare`<sup>Required</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare"></a>

```csharp
public string FilterLogsToCloudflare { get; }
```

- *Type:* string

---

##### `H2Prioritization`<sup>Required</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization"></a>

```csharp
public string H2Prioritization { get; }
```

- *Type:* string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection"></a>

```csharp
public string HotlinkProtection { get; }
```

- *Type:* string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2"></a>

```csharp
public string Http2 { get; }
```

- *Type:* string

---

##### `Http3`<sup>Required</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3"></a>

```csharp
public string Http3 { get; }
```

- *Type:* string

---

##### `ImageResizing`<sup>Required</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing"></a>

```csharp
public string ImageResizing { get; }
```

- *Type:* string

---

##### `IpGeolocation`<sup>Required</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation"></a>

```csharp
public string IpGeolocation { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `LogToCloudflare`<sup>Required</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare"></a>

```csharp
public string LogToCloudflare { get; }
```

- *Type:* string

---

##### `MaxUpload`<sup>Required</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload"></a>

```csharp
public double MaxUpload { get; }
```

- *Type:* double

---

##### `Minify`<sup>Required</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsMinifyList Minify { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a>

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage"></a>

```csharp
public string Mirage { get; }
```

- *Type:* string

---

##### `MobileRedirect`<sup>Required</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsMobileRedirectList MobileRedirect { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a>

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption"></a>

```csharp
public string OpportunisticEncryption { get; }
```

- *Type:* string

---

##### `OpportunisticOnion`<sup>Required</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion"></a>

```csharp
public string OpportunisticOnion { get; }
```

- *Type:* string

---

##### `OrangeToOrange`<sup>Required</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange"></a>

```csharp
public string OrangeToOrange { get; }
```

- *Type:* string

---

##### `OriginErrorPagePassThru`<sup>Required</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru"></a>

```csharp
public string OriginErrorPagePassThru { get; }
```

- *Type:* string

---

##### `OriginMaxHttpVersion`<sup>Required</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion"></a>

```csharp
public string OriginMaxHttpVersion { get; }
```

- *Type:* string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish"></a>

```csharp
public string Polish { get; }
```

- *Type:* string

---

##### `PrefetchPreload`<sup>Required</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload"></a>

```csharp
public string PrefetchPreload { get; }
```

- *Type:* string

---

##### `PrivacyPass`<sup>Required</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass"></a>

```csharp
public string PrivacyPass { get; }
```

- *Type:* string

---

##### `ProxyReadTimeout`<sup>Required</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout"></a>

```csharp
public string ProxyReadTimeout { get; }
```

- *Type:* string

---

##### `PseudoIpv4`<sup>Required</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4"></a>

```csharp
public string PseudoIpv4 { get; }
```

- *Type:* string

---

##### `ResponseBuffering`<sup>Required</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering"></a>

```csharp
public string ResponseBuffering { get; }
```

- *Type:* string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader"></a>

```csharp
public string RocketLoader { get; }
```

- *Type:* string

---

##### `SecurityHeader`<sup>Required</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsSecurityHeaderList SecurityHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a>

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `ServerSideExclude`<sup>Required</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude"></a>

```csharp
public string ServerSideExclude { get; }
```

- *Type:* string

---

##### `SortQueryStringForCache`<sup>Required</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache"></a>

```csharp
public string SortQueryStringForCache { get; }
```

- *Type:* string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl"></a>

```csharp
public string Ssl { get; }
```

- *Type:* string

---

##### `Tls12Only`<sup>Required</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only"></a>

```csharp
public string Tls12Only { get; }
```

- *Type:* string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13"></a>

```csharp
public string Tls13 { get; }
```

- *Type:* string

---

##### `TlsClientAuth`<sup>Required</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth"></a>

```csharp
public string TlsClientAuth { get; }
```

- *Type:* string

---

##### `TrueClientIpHeader`<sup>Required</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader"></a>

```csharp
public string TrueClientIpHeader { get; }
```

- *Type:* string

---

##### `UniversalSsl`<sup>Required</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl"></a>

```csharp
public string UniversalSsl { get; }
```

- *Type:* string

---

##### `VisitorIp`<sup>Required</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp"></a>

```csharp
public string VisitorIp { get; }
```

- *Type:* string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf"></a>

```csharp
public string Waf { get; }
```

- *Type:* string

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp"></a>

```csharp
public string Webp { get; }
```

- *Type:* string

---

##### `Websockets`<sup>Required</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets"></a>

```csharp
public string Websockets { get; }
```

- *Type:* string

---

##### `ZeroRtt`<sup>Required</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt"></a>

```csharp
public string ZeroRtt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideInitialSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a>

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderList <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsSecurityHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get"></a>

```csharp
private ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff">Nosniff</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload">Preload</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```csharp
public IResolvable IncludeSubdomains { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Nosniff`<sup>Required</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```csharp
public IResolvable Nosniff { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Preload`<sup>Required</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload"></a>

```csharp
public IResolvable Preload { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideInitialSettingsSecurityHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a>

---


### ZoneSettingsOverrideSettingsMinifyOutputReference <a name="ZoneSettingsOverrideSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsMinifyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput">CssInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput">JsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css">Css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js">Js</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput"></a>

```csharp
public string CssInput { get; }
```

- *Type:* string

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput"></a>

```csharp
public string HtmlInput { get; }
```

- *Type:* string

---

##### `JsInput`<sup>Optional</sup> <a name="JsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput"></a>

```csharp
public string JsInput { get; }
```

- *Type:* string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css"></a>

```csharp
public string Css { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js"></a>

```csharp
public string Js { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideSettingsMinify InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---


### ZoneSettingsOverrideSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsMobileRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput">MobileSubdomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput">StripUriInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain">MobileSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri">StripUri</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MobileSubdomainInput`<sup>Optional</sup> <a name="MobileSubdomainInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput"></a>

```csharp
public string MobileSubdomainInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StripUriInput`<sup>Optional</sup> <a name="StripUriInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput"></a>

```csharp
public object StripUriInput { get; }
```

- *Type:* object

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```csharp
public string MobileSubdomain { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri"></a>

```csharp
public object StripUri { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideSettingsMobileRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideSettingsOutputReference <a name="ZoneSettingsOverrideSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify">PutMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect">PutMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader">PutSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline">ResetAlwaysOnline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps">ResetAlwaysUseHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites">ResetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst">ResetBinaryAst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli">ResetBrotli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl">ResetBrowserCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck">ResetBrowserCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel">ResetCacheLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl">ResetChallengeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers">ResetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening">ResetCnameFlattening</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode">ResetDevelopmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints">ResetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation">ResetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare">ResetFilterLogsToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization">ResetH2Prioritization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection">ResetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2">ResetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3">ResetHttp3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing">ResetImageResizing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation">ResetIpGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare">ResetLogToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload">ResetMaxUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify">ResetMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage">ResetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect">ResetMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption">ResetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion">ResetOpportunisticOnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange">ResetOrangeToOrange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru">ResetOriginErrorPagePassThru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion">ResetOriginMaxHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish">ResetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload">ResetPrefetchPreload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass">ResetPrivacyPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout">ResetProxyReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4">ResetPseudoIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering">ResetResponseBuffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader">ResetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader">ResetSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude">ResetServerSideExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache">ResetSortQueryStringForCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only">ResetTls12Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13">ResetTls13</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth">ResetTlsClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader">ResetTrueClientIpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl">ResetUniversalSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp">ResetVisitorIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf">ResetWaf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp">ResetWebp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets">ResetWebsockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt">ResetZeroRtt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMinify` <a name="PutMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify"></a>

```csharp
private void PutMinify(ZoneSettingsOverrideSettingsMinify Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `PutMobileRedirect` <a name="PutMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect"></a>

```csharp
private void PutMobileRedirect(ZoneSettingsOverrideSettingsMobileRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `PutSecurityHeader` <a name="PutSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader"></a>

```csharp
private void PutSecurityHeader(ZoneSettingsOverrideSettingsSecurityHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `ResetAlwaysOnline` <a name="ResetAlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline"></a>

```csharp
private void ResetAlwaysOnline()
```

##### `ResetAlwaysUseHttps` <a name="ResetAlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps"></a>

```csharp
private void ResetAlwaysUseHttps()
```

##### `ResetAutomaticHttpsRewrites` <a name="ResetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites"></a>

```csharp
private void ResetAutomaticHttpsRewrites()
```

##### `ResetBinaryAst` <a name="ResetBinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst"></a>

```csharp
private void ResetBinaryAst()
```

##### `ResetBrotli` <a name="ResetBrotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli"></a>

```csharp
private void ResetBrotli()
```

##### `ResetBrowserCacheTtl` <a name="ResetBrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl"></a>

```csharp
private void ResetBrowserCacheTtl()
```

##### `ResetBrowserCheck` <a name="ResetBrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck"></a>

```csharp
private void ResetBrowserCheck()
```

##### `ResetCacheLevel` <a name="ResetCacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel"></a>

```csharp
private void ResetCacheLevel()
```

##### `ResetChallengeTtl` <a name="ResetChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl"></a>

```csharp
private void ResetChallengeTtl()
```

##### `ResetCiphers` <a name="ResetCiphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers"></a>

```csharp
private void ResetCiphers()
```

##### `ResetCnameFlattening` <a name="ResetCnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening"></a>

```csharp
private void ResetCnameFlattening()
```

##### `ResetDevelopmentMode` <a name="ResetDevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode"></a>

```csharp
private void ResetDevelopmentMode()
```

##### `ResetEarlyHints` <a name="ResetEarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints"></a>

```csharp
private void ResetEarlyHints()
```

##### `ResetEmailObfuscation` <a name="ResetEmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation"></a>

```csharp
private void ResetEmailObfuscation()
```

##### `ResetFilterLogsToCloudflare` <a name="ResetFilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare"></a>

```csharp
private void ResetFilterLogsToCloudflare()
```

##### `ResetH2Prioritization` <a name="ResetH2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization"></a>

```csharp
private void ResetH2Prioritization()
```

##### `ResetHotlinkProtection` <a name="ResetHotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection"></a>

```csharp
private void ResetHotlinkProtection()
```

##### `ResetHttp2` <a name="ResetHttp2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2"></a>

```csharp
private void ResetHttp2()
```

##### `ResetHttp3` <a name="ResetHttp3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3"></a>

```csharp
private void ResetHttp3()
```

##### `ResetImageResizing` <a name="ResetImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing"></a>

```csharp
private void ResetImageResizing()
```

##### `ResetIpGeolocation` <a name="ResetIpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation"></a>

```csharp
private void ResetIpGeolocation()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetLogToCloudflare` <a name="ResetLogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare"></a>

```csharp
private void ResetLogToCloudflare()
```

##### `ResetMaxUpload` <a name="ResetMaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload"></a>

```csharp
private void ResetMaxUpload()
```

##### `ResetMinify` <a name="ResetMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify"></a>

```csharp
private void ResetMinify()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetMirage` <a name="ResetMirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage"></a>

```csharp
private void ResetMirage()
```

##### `ResetMobileRedirect` <a name="ResetMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect"></a>

```csharp
private void ResetMobileRedirect()
```

##### `ResetOpportunisticEncryption` <a name="ResetOpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption"></a>

```csharp
private void ResetOpportunisticEncryption()
```

##### `ResetOpportunisticOnion` <a name="ResetOpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion"></a>

```csharp
private void ResetOpportunisticOnion()
```

##### `ResetOrangeToOrange` <a name="ResetOrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange"></a>

```csharp
private void ResetOrangeToOrange()
```

##### `ResetOriginErrorPagePassThru` <a name="ResetOriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru"></a>

```csharp
private void ResetOriginErrorPagePassThru()
```

##### `ResetOriginMaxHttpVersion` <a name="ResetOriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion"></a>

```csharp
private void ResetOriginMaxHttpVersion()
```

##### `ResetPolish` <a name="ResetPolish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish"></a>

```csharp
private void ResetPolish()
```

##### `ResetPrefetchPreload` <a name="ResetPrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload"></a>

```csharp
private void ResetPrefetchPreload()
```

##### `ResetPrivacyPass` <a name="ResetPrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass"></a>

```csharp
private void ResetPrivacyPass()
```

##### `ResetProxyReadTimeout` <a name="ResetProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout"></a>

```csharp
private void ResetProxyReadTimeout()
```

##### `ResetPseudoIpv4` <a name="ResetPseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4"></a>

```csharp
private void ResetPseudoIpv4()
```

##### `ResetResponseBuffering` <a name="ResetResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering"></a>

```csharp
private void ResetResponseBuffering()
```

##### `ResetRocketLoader` <a name="ResetRocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader"></a>

```csharp
private void ResetRocketLoader()
```

##### `ResetSecurityHeader` <a name="ResetSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader"></a>

```csharp
private void ResetSecurityHeader()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```

##### `ResetServerSideExclude` <a name="ResetServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude"></a>

```csharp
private void ResetServerSideExclude()
```

##### `ResetSortQueryStringForCache` <a name="ResetSortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache"></a>

```csharp
private void ResetSortQueryStringForCache()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetTls12Only` <a name="ResetTls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only"></a>

```csharp
private void ResetTls12Only()
```

##### `ResetTls13` <a name="ResetTls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13"></a>

```csharp
private void ResetTls13()
```

##### `ResetTlsClientAuth` <a name="ResetTlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth"></a>

```csharp
private void ResetTlsClientAuth()
```

##### `ResetTrueClientIpHeader` <a name="ResetTrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader"></a>

```csharp
private void ResetTrueClientIpHeader()
```

##### `ResetUniversalSsl` <a name="ResetUniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl"></a>

```csharp
private void ResetUniversalSsl()
```

##### `ResetVisitorIp` <a name="ResetVisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp"></a>

```csharp
private void ResetVisitorIp()
```

##### `ResetWaf` <a name="ResetWaf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf"></a>

```csharp
private void ResetWaf()
```

##### `ResetWebp` <a name="ResetWebp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp"></a>

```csharp
private void ResetWebp()
```

##### `ResetWebsockets` <a name="ResetWebsockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets"></a>

```csharp
private void ResetWebsockets()
```

##### `ResetZeroRtt` <a name="ResetZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt"></a>

```csharp
private void ResetZeroRtt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput">AlwaysOnlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput">AlwaysUseHttpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput">AutomaticHttpsRewritesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput">BinaryAstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput">BrotliInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput">BrowserCacheTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput">BrowserCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput">CacheLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput">ChallengeTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput">CiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput">CnameFlatteningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput">DevelopmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput">EarlyHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput">EmailObfuscationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput">FilterLogsToCloudflareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput">H2PrioritizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput">HotlinkProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input">Http2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input">Http3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput">ImageResizingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput">IpGeolocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput">LogToCloudflareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput">MaxUploadInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput">MinifyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput">MirageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput">MobileRedirectInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput">OpportunisticEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput">OpportunisticOnionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput">OrangeToOrangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput">OriginErrorPagePassThruInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput">OriginMaxHttpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput">PolishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput">PrefetchPreloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput">PrivacyPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput">ProxyReadTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input">PseudoIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput">ResponseBufferingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput">RocketLoaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput">SecurityHeaderInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput">ServerSideExcludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput">SortQueryStringForCacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput">SslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput">Tls12OnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input">Tls13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput">TlsClientAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput">TrueClientIpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput">UniversalSslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput">VisitorIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput">WafInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput">WebpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput">WebsocketsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput">ZeroRttInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline">AlwaysOnline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst">BinaryAst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli">Brotli</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck">BrowserCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel">CacheLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl">ChallengeTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening">CnameFlattening</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode">DevelopmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization">H2Prioritization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2">Http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3">Http3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing">ImageResizing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation">IpGeolocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare">LogToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload">MaxUpload</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage">Mirage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange">OrangeToOrange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish">Polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload">PrefetchPreload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass">PrivacyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4">PseudoIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering">ResponseBuffering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude">ServerSideExclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl">Ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only">Tls12Only</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13">Tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth">TlsClientAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl">UniversalSsl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp">VisitorIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf">Waf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp">Webp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets">Websockets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt">ZeroRtt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Minify`<sup>Required</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify"></a>

```csharp
public ZoneSettingsOverrideSettingsMinifyOutputReference Minify { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a>

---

##### `MobileRedirect`<sup>Required</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect"></a>

```csharp
public ZoneSettingsOverrideSettingsMobileRedirectOutputReference MobileRedirect { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a>

---

##### `SecurityHeader`<sup>Required</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader"></a>

```csharp
public ZoneSettingsOverrideSettingsSecurityHeaderOutputReference SecurityHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a>

---

##### `AlwaysOnlineInput`<sup>Optional</sup> <a name="AlwaysOnlineInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput"></a>

```csharp
public string AlwaysOnlineInput { get; }
```

- *Type:* string

---

##### `AlwaysUseHttpsInput`<sup>Optional</sup> <a name="AlwaysUseHttpsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput"></a>

```csharp
public string AlwaysUseHttpsInput { get; }
```

- *Type:* string

---

##### `AutomaticHttpsRewritesInput`<sup>Optional</sup> <a name="AutomaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput"></a>

```csharp
public string AutomaticHttpsRewritesInput { get; }
```

- *Type:* string

---

##### `BinaryAstInput`<sup>Optional</sup> <a name="BinaryAstInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput"></a>

```csharp
public string BinaryAstInput { get; }
```

- *Type:* string

---

##### `BrotliInput`<sup>Optional</sup> <a name="BrotliInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput"></a>

```csharp
public string BrotliInput { get; }
```

- *Type:* string

---

##### `BrowserCacheTtlInput`<sup>Optional</sup> <a name="BrowserCacheTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput"></a>

```csharp
public double BrowserCacheTtlInput { get; }
```

- *Type:* double

---

##### `BrowserCheckInput`<sup>Optional</sup> <a name="BrowserCheckInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput"></a>

```csharp
public string BrowserCheckInput { get; }
```

- *Type:* string

---

##### `CacheLevelInput`<sup>Optional</sup> <a name="CacheLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput"></a>

```csharp
public string CacheLevelInput { get; }
```

- *Type:* string

---

##### `ChallengeTtlInput`<sup>Optional</sup> <a name="ChallengeTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput"></a>

```csharp
public double ChallengeTtlInput { get; }
```

- *Type:* double

---

##### `CiphersInput`<sup>Optional</sup> <a name="CiphersInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput"></a>

```csharp
public string[] CiphersInput { get; }
```

- *Type:* string[]

---

##### `CnameFlatteningInput`<sup>Optional</sup> <a name="CnameFlatteningInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput"></a>

```csharp
public string CnameFlatteningInput { get; }
```

- *Type:* string

---

##### `DevelopmentModeInput`<sup>Optional</sup> <a name="DevelopmentModeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput"></a>

```csharp
public string DevelopmentModeInput { get; }
```

- *Type:* string

---

##### `EarlyHintsInput`<sup>Optional</sup> <a name="EarlyHintsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput"></a>

```csharp
public string EarlyHintsInput { get; }
```

- *Type:* string

---

##### `EmailObfuscationInput`<sup>Optional</sup> <a name="EmailObfuscationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput"></a>

```csharp
public string EmailObfuscationInput { get; }
```

- *Type:* string

---

##### `FilterLogsToCloudflareInput`<sup>Optional</sup> <a name="FilterLogsToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput"></a>

```csharp
public string FilterLogsToCloudflareInput { get; }
```

- *Type:* string

---

##### `H2PrioritizationInput`<sup>Optional</sup> <a name="H2PrioritizationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput"></a>

```csharp
public string H2PrioritizationInput { get; }
```

- *Type:* string

---

##### `HotlinkProtectionInput`<sup>Optional</sup> <a name="HotlinkProtectionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput"></a>

```csharp
public string HotlinkProtectionInput { get; }
```

- *Type:* string

---

##### `Http2Input`<sup>Optional</sup> <a name="Http2Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input"></a>

```csharp
public string Http2Input { get; }
```

- *Type:* string

---

##### `Http3Input`<sup>Optional</sup> <a name="Http3Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input"></a>

```csharp
public string Http3Input { get; }
```

- *Type:* string

---

##### `ImageResizingInput`<sup>Optional</sup> <a name="ImageResizingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput"></a>

```csharp
public string ImageResizingInput { get; }
```

- *Type:* string

---

##### `IpGeolocationInput`<sup>Optional</sup> <a name="IpGeolocationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput"></a>

```csharp
public string IpGeolocationInput { get; }
```

- *Type:* string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input"></a>

```csharp
public string Ipv6Input { get; }
```

- *Type:* string

---

##### `LogToCloudflareInput`<sup>Optional</sup> <a name="LogToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput"></a>

```csharp
public string LogToCloudflareInput { get; }
```

- *Type:* string

---

##### `MaxUploadInput`<sup>Optional</sup> <a name="MaxUploadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput"></a>

```csharp
public double MaxUploadInput { get; }
```

- *Type:* double

---

##### `MinifyInput`<sup>Optional</sup> <a name="MinifyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput"></a>

```csharp
public ZoneSettingsOverrideSettingsMinify MinifyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `MirageInput`<sup>Optional</sup> <a name="MirageInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput"></a>

```csharp
public string MirageInput { get; }
```

- *Type:* string

---

##### `MobileRedirectInput`<sup>Optional</sup> <a name="MobileRedirectInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput"></a>

```csharp
public ZoneSettingsOverrideSettingsMobileRedirect MobileRedirectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `OpportunisticEncryptionInput`<sup>Optional</sup> <a name="OpportunisticEncryptionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput"></a>

```csharp
public string OpportunisticEncryptionInput { get; }
```

- *Type:* string

---

##### `OpportunisticOnionInput`<sup>Optional</sup> <a name="OpportunisticOnionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput"></a>

```csharp
public string OpportunisticOnionInput { get; }
```

- *Type:* string

---

##### `OrangeToOrangeInput`<sup>Optional</sup> <a name="OrangeToOrangeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput"></a>

```csharp
public string OrangeToOrangeInput { get; }
```

- *Type:* string

---

##### `OriginErrorPagePassThruInput`<sup>Optional</sup> <a name="OriginErrorPagePassThruInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput"></a>

```csharp
public string OriginErrorPagePassThruInput { get; }
```

- *Type:* string

---

##### `OriginMaxHttpVersionInput`<sup>Optional</sup> <a name="OriginMaxHttpVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput"></a>

```csharp
public string OriginMaxHttpVersionInput { get; }
```

- *Type:* string

---

##### `PolishInput`<sup>Optional</sup> <a name="PolishInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput"></a>

```csharp
public string PolishInput { get; }
```

- *Type:* string

---

##### `PrefetchPreloadInput`<sup>Optional</sup> <a name="PrefetchPreloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput"></a>

```csharp
public string PrefetchPreloadInput { get; }
```

- *Type:* string

---

##### `PrivacyPassInput`<sup>Optional</sup> <a name="PrivacyPassInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput"></a>

```csharp
public string PrivacyPassInput { get; }
```

- *Type:* string

---

##### `ProxyReadTimeoutInput`<sup>Optional</sup> <a name="ProxyReadTimeoutInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput"></a>

```csharp
public string ProxyReadTimeoutInput { get; }
```

- *Type:* string

---

##### `PseudoIpv4Input`<sup>Optional</sup> <a name="PseudoIpv4Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input"></a>

```csharp
public string PseudoIpv4Input { get; }
```

- *Type:* string

---

##### `ResponseBufferingInput`<sup>Optional</sup> <a name="ResponseBufferingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput"></a>

```csharp
public string ResponseBufferingInput { get; }
```

- *Type:* string

---

##### `RocketLoaderInput`<sup>Optional</sup> <a name="RocketLoaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput"></a>

```csharp
public string RocketLoaderInput { get; }
```

- *Type:* string

---

##### `SecurityHeaderInput`<sup>Optional</sup> <a name="SecurityHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput"></a>

```csharp
public ZoneSettingsOverrideSettingsSecurityHeader SecurityHeaderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `ServerSideExcludeInput`<sup>Optional</sup> <a name="ServerSideExcludeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput"></a>

```csharp
public string ServerSideExcludeInput { get; }
```

- *Type:* string

---

##### `SortQueryStringForCacheInput`<sup>Optional</sup> <a name="SortQueryStringForCacheInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput"></a>

```csharp
public string SortQueryStringForCacheInput { get; }
```

- *Type:* string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput"></a>

```csharp
public string SslInput { get; }
```

- *Type:* string

---

##### `Tls12OnlyInput`<sup>Optional</sup> <a name="Tls12OnlyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput"></a>

```csharp
public string Tls12OnlyInput { get; }
```

- *Type:* string

---

##### `Tls13Input`<sup>Optional</sup> <a name="Tls13Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input"></a>

```csharp
public string Tls13Input { get; }
```

- *Type:* string

---

##### `TlsClientAuthInput`<sup>Optional</sup> <a name="TlsClientAuthInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput"></a>

```csharp
public string TlsClientAuthInput { get; }
```

- *Type:* string

---

##### `TrueClientIpHeaderInput`<sup>Optional</sup> <a name="TrueClientIpHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput"></a>

```csharp
public string TrueClientIpHeaderInput { get; }
```

- *Type:* string

---

##### `UniversalSslInput`<sup>Optional</sup> <a name="UniversalSslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput"></a>

```csharp
public string UniversalSslInput { get; }
```

- *Type:* string

---

##### `VisitorIpInput`<sup>Optional</sup> <a name="VisitorIpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput"></a>

```csharp
public string VisitorIpInput { get; }
```

- *Type:* string

---

##### `WafInput`<sup>Optional</sup> <a name="WafInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput"></a>

```csharp
public string WafInput { get; }
```

- *Type:* string

---

##### `WebpInput`<sup>Optional</sup> <a name="WebpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput"></a>

```csharp
public string WebpInput { get; }
```

- *Type:* string

---

##### `WebsocketsInput`<sup>Optional</sup> <a name="WebsocketsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput"></a>

```csharp
public string WebsocketsInput { get; }
```

- *Type:* string

---

##### `ZeroRttInput`<sup>Optional</sup> <a name="ZeroRttInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput"></a>

```csharp
public string ZeroRttInput { get; }
```

- *Type:* string

---

##### `AlwaysOnline`<sup>Required</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline"></a>

```csharp
public string AlwaysOnline { get; }
```

- *Type:* string

---

##### `AlwaysUseHttps`<sup>Required</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps"></a>

```csharp
public string AlwaysUseHttps { get; }
```

- *Type:* string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites"></a>

```csharp
public string AutomaticHttpsRewrites { get; }
```

- *Type:* string

---

##### `BinaryAst`<sup>Required</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst"></a>

```csharp
public string BinaryAst { get; }
```

- *Type:* string

---

##### `Brotli`<sup>Required</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli"></a>

```csharp
public string Brotli { get; }
```

- *Type:* string

---

##### `BrowserCacheTtl`<sup>Required</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl"></a>

```csharp
public double BrowserCacheTtl { get; }
```

- *Type:* double

---

##### `BrowserCheck`<sup>Required</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck"></a>

```csharp
public string BrowserCheck { get; }
```

- *Type:* string

---

##### `CacheLevel`<sup>Required</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel"></a>

```csharp
public string CacheLevel { get; }
```

- *Type:* string

---

##### `ChallengeTtl`<sup>Required</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl"></a>

```csharp
public double ChallengeTtl { get; }
```

- *Type:* double

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers"></a>

```csharp
public string[] Ciphers { get; }
```

- *Type:* string[]

---

##### `CnameFlattening`<sup>Required</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening"></a>

```csharp
public string CnameFlattening { get; }
```

- *Type:* string

---

##### `DevelopmentMode`<sup>Required</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode"></a>

```csharp
public string DevelopmentMode { get; }
```

- *Type:* string

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints"></a>

```csharp
public string EarlyHints { get; }
```

- *Type:* string

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation"></a>

```csharp
public string EmailObfuscation { get; }
```

- *Type:* string

---

##### `FilterLogsToCloudflare`<sup>Required</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare"></a>

```csharp
public string FilterLogsToCloudflare { get; }
```

- *Type:* string

---

##### `H2Prioritization`<sup>Required</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization"></a>

```csharp
public string H2Prioritization { get; }
```

- *Type:* string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection"></a>

```csharp
public string HotlinkProtection { get; }
```

- *Type:* string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2"></a>

```csharp
public string Http2 { get; }
```

- *Type:* string

---

##### `Http3`<sup>Required</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3"></a>

```csharp
public string Http3 { get; }
```

- *Type:* string

---

##### `ImageResizing`<sup>Required</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing"></a>

```csharp
public string ImageResizing { get; }
```

- *Type:* string

---

##### `IpGeolocation`<sup>Required</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation"></a>

```csharp
public string IpGeolocation { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `LogToCloudflare`<sup>Required</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare"></a>

```csharp
public string LogToCloudflare { get; }
```

- *Type:* string

---

##### `MaxUpload`<sup>Required</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload"></a>

```csharp
public double MaxUpload { get; }
```

- *Type:* double

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage"></a>

```csharp
public string Mirage { get; }
```

- *Type:* string

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption"></a>

```csharp
public string OpportunisticEncryption { get; }
```

- *Type:* string

---

##### `OpportunisticOnion`<sup>Required</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion"></a>

```csharp
public string OpportunisticOnion { get; }
```

- *Type:* string

---

##### `OrangeToOrange`<sup>Required</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange"></a>

```csharp
public string OrangeToOrange { get; }
```

- *Type:* string

---

##### `OriginErrorPagePassThru`<sup>Required</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru"></a>

```csharp
public string OriginErrorPagePassThru { get; }
```

- *Type:* string

---

##### `OriginMaxHttpVersion`<sup>Required</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion"></a>

```csharp
public string OriginMaxHttpVersion { get; }
```

- *Type:* string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish"></a>

```csharp
public string Polish { get; }
```

- *Type:* string

---

##### `PrefetchPreload`<sup>Required</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload"></a>

```csharp
public string PrefetchPreload { get; }
```

- *Type:* string

---

##### `PrivacyPass`<sup>Required</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass"></a>

```csharp
public string PrivacyPass { get; }
```

- *Type:* string

---

##### `ProxyReadTimeout`<sup>Required</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout"></a>

```csharp
public string ProxyReadTimeout { get; }
```

- *Type:* string

---

##### `PseudoIpv4`<sup>Required</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4"></a>

```csharp
public string PseudoIpv4 { get; }
```

- *Type:* string

---

##### `ResponseBuffering`<sup>Required</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering"></a>

```csharp
public string ResponseBuffering { get; }
```

- *Type:* string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader"></a>

```csharp
public string RocketLoader { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `ServerSideExclude`<sup>Required</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude"></a>

```csharp
public string ServerSideExclude { get; }
```

- *Type:* string

---

##### `SortQueryStringForCache`<sup>Required</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache"></a>

```csharp
public string SortQueryStringForCache { get; }
```

- *Type:* string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl"></a>

```csharp
public string Ssl { get; }
```

- *Type:* string

---

##### `Tls12Only`<sup>Required</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only"></a>

```csharp
public string Tls12Only { get; }
```

- *Type:* string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13"></a>

```csharp
public string Tls13 { get; }
```

- *Type:* string

---

##### `TlsClientAuth`<sup>Required</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth"></a>

```csharp
public string TlsClientAuth { get; }
```

- *Type:* string

---

##### `TrueClientIpHeader`<sup>Required</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader"></a>

```csharp
public string TrueClientIpHeader { get; }
```

- *Type:* string

---

##### `UniversalSsl`<sup>Required</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl"></a>

```csharp
public string UniversalSsl { get; }
```

- *Type:* string

---

##### `VisitorIp`<sup>Required</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp"></a>

```csharp
public string VisitorIp { get; }
```

- *Type:* string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf"></a>

```csharp
public string Waf { get; }
```

- *Type:* string

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp"></a>

```csharp
public string Webp { get; }
```

- *Type:* string

---

##### `Websockets`<sup>Required</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets"></a>

```csharp
public string Websockets { get; }
```

- *Type:* string

---

##### `ZeroRtt`<sup>Required</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt"></a>

```csharp
public string ZeroRtt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---


### ZoneSettingsOverrideSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSettingsOverrideSettingsSecurityHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff">ResetNosniff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload">ResetPreload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains"></a>

```csharp
private void ResetIncludeSubdomains()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetNosniff` <a name="ResetNosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff"></a>

```csharp
private void ResetNosniff()
```

##### `ResetPreload` <a name="ResetPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload"></a>

```csharp
private void ResetPreload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput">NosniffInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput">PreloadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff">Nosniff</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload">Preload</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput"></a>

```csharp
public object IncludeSubdomainsInput { get; }
```

- *Type:* object

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `NosniffInput`<sup>Optional</sup> <a name="NosniffInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput"></a>

```csharp
public object NosniffInput { get; }
```

- *Type:* object

---

##### `PreloadInput`<sup>Optional</sup> <a name="PreloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput"></a>

```csharp
public object PreloadInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```csharp
public object IncludeSubdomains { get; }
```

- *Type:* object

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Nosniff`<sup>Required</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```csharp
public object Nosniff { get; }
```

- *Type:* object

---

##### `Preload`<sup>Required</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload"></a>

```csharp
public object Preload { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```csharp
public ZoneSettingsOverrideSettingsSecurityHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---



