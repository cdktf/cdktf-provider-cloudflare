# `dataCloudflareStreamLiveInput` Submodule <a name="`dataCloudflareStreamLiveInput` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreamLiveInput <a name="DataCloudflareStreamLiveInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInput(Construct Scope, string Id, DataCloudflareStreamLiveInputConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareStreamLiveInput.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareStreamLiveInput.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareStreamLiveInput.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareStreamLiveInput.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareStreamLiveInput to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareStreamLiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays">DeleteRecordingAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta">Meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording">Recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps">Rtmps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback">RtmpsPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt">Srt</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback">SrtPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc">WebRtc</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback">WebRtcPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput">LiveInputIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `DeleteRecordingAfterDays`<sup>Required</sup> <a name="DeleteRecordingAfterDays" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays"></a>

```csharp
public double DeleteRecordingAfterDays { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta"></a>

```csharp
public string Meta { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Recording`<sup>Required</sup> <a name="Recording" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording"></a>

```csharp
public DataCloudflareStreamLiveInputRecordingOutputReference Recording { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a>

---

##### `Rtmps`<sup>Required</sup> <a name="Rtmps" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps"></a>

```csharp
public DataCloudflareStreamLiveInputRtmpsOutputReference Rtmps { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a>

---

##### `RtmpsPlayback`<sup>Required</sup> <a name="RtmpsPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback"></a>

```csharp
public DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference RtmpsPlayback { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a>

---

##### `Srt`<sup>Required</sup> <a name="Srt" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt"></a>

```csharp
public DataCloudflareStreamLiveInputSrtOutputReference Srt { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a>

---

##### `SrtPlayback`<sup>Required</sup> <a name="SrtPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback"></a>

```csharp
public DataCloudflareStreamLiveInputSrtPlaybackOutputReference SrtPlayback { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `WebRtc`<sup>Required</sup> <a name="WebRtc" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc"></a>

```csharp
public DataCloudflareStreamLiveInputWebRtcOutputReference WebRtc { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a>

---

##### `WebRtcPlayback`<sup>Required</sup> <a name="WebRtcPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback"></a>

```csharp
public DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference WebRtcPlayback { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `LiveInputIdentifierInput`<sup>Optional</sup> <a name="LiveInputIdentifierInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput"></a>

```csharp
public string LiveInputIdentifierInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `LiveInputIdentifier`<sup>Required</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier"></a>

```csharp
public string LiveInputIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamLiveInputConfig <a name="DataCloudflareStreamLiveInputConfig" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string LiveInputIdentifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>string</code> | A unique identifier for a live input. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/stream_live_input#account_id DataCloudflareStreamLiveInput#account_id}

---

##### `LiveInputIdentifier`<sup>Required</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier"></a>

```csharp
public string LiveInputIdentifier { get; set; }
```

- *Type:* string

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/stream_live_input#live_input_identifier DataCloudflareStreamLiveInput#live_input_identifier}

---

### DataCloudflareStreamLiveInputRecording <a name="DataCloudflareStreamLiveInputRecording" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRecording {

};
```


### DataCloudflareStreamLiveInputRtmps <a name="DataCloudflareStreamLiveInputRtmps" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRtmps {

};
```


### DataCloudflareStreamLiveInputRtmpsPlayback <a name="DataCloudflareStreamLiveInputRtmpsPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRtmpsPlayback {

};
```


### DataCloudflareStreamLiveInputSrt <a name="DataCloudflareStreamLiveInputSrt" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputSrt {

};
```


### DataCloudflareStreamLiveInputSrtPlayback <a name="DataCloudflareStreamLiveInputSrtPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputSrtPlayback {

};
```


### DataCloudflareStreamLiveInputWebRtc <a name="DataCloudflareStreamLiveInputWebRtc" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputWebRtc {

};
```


### DataCloudflareStreamLiveInputWebRtcPlayback <a name="DataCloudflareStreamLiveInputWebRtcPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputWebRtcPlayback {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareStreamLiveInputRecordingOutputReference <a name="DataCloudflareStreamLiveInputRecordingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRecordingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount">HideLiveViewerCount</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `HideLiveViewerCount`<sup>Required</sup> <a name="HideLiveViewerCount" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount"></a>

```csharp
public IResolvable HideLiveViewerCount { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RequireSignedUrls`<sup>Required</sup> <a name="RequireSignedUrls" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls"></a>

```csharp
public IResolvable RequireSignedUrls { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputRecording InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a>

---


### DataCloudflareStreamLiveInputRtmpsOutputReference <a name="DataCloudflareStreamLiveInputRtmpsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRtmpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey">StreamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey"></a>

```csharp
public string StreamKey { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputRtmps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a>

---


### DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference <a name="DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey">StreamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey"></a>

```csharp
public string StreamKey { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputRtmpsPlayback InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a>

---


### DataCloudflareStreamLiveInputSrtOutputReference <a name="DataCloudflareStreamLiveInputSrtOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputSrtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputSrt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a>

---


### DataCloudflareStreamLiveInputSrtPlaybackOutputReference <a name="DataCloudflareStreamLiveInputSrtPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputSrtPlaybackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputSrtPlayback InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a>

---


### DataCloudflareStreamLiveInputWebRtcOutputReference <a name="DataCloudflareStreamLiveInputWebRtcOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputWebRtcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputWebRtc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a>

---


### DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference <a name="DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareStreamLiveInputWebRtcPlayback InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a>

---



