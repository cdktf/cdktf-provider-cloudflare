# `cloudflare_device_settings_policy`

Refer to the Terraform Registory for docs: [`cloudflare_device_settings_policy`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy).

# `deviceSettingsPolicy` Submodule <a name="`deviceSettingsPolicy` Submodule" id="@cdktf/provider-cloudflare.deviceSettingsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeviceSettingsPolicy <a name="DeviceSettingsPolicy" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy cloudflare_device_settings_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer"></a>

```typescript
import { deviceSettingsPolicy } from '@cdktf/provider-cloudflare'

new deviceSettingsPolicy.DeviceSettingsPolicy(scope: Construct, id: string, config: DeviceSettingsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode">resetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port">resetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave"></a>

```typescript
public resetAllowedToLeave(): void
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch"></a>

```typescript
public resetAllowModeSwitch(): void
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates"></a>

```typescript
public resetAllowUpdates(): void
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect"></a>

```typescript
public resetAutoConnect(): void
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal"></a>

```typescript
public resetCaptivePortal(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback"></a>

```typescript
public resetDisableAutoFallback(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps"></a>

```typescript
public resetExcludeOfficeIps(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence"></a>

```typescript
public resetPrecedence(): void
```

##### `resetServiceModeV2Mode` <a name="resetServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode"></a>

```typescript
public resetServiceModeV2Mode(): void
```

##### `resetServiceModeV2Port` <a name="resetServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port"></a>

```typescript
public resetServiceModeV2Port(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked"></a>

```typescript
public resetSwitchLocked(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct"></a>

```typescript
import { deviceSettingsPolicy } from '@cdktf/provider-cloudflare'

deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement"></a>

```typescript
import { deviceSettingsPolicy } from '@cdktf/provider-cloudflare'

deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource"></a>

```typescript
import { deviceSettingsPolicy } from '@cdktf/provider-cloudflare'

deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput">autoConnectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput">captivePortalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput">precedenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput">serviceModeV2ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput">serviceModeV2PortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput">switchLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput"></a>

```typescript
public readonly allowedToLeaveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput"></a>

```typescript
public readonly allowModeSwitchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput"></a>

```typescript
public readonly allowUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput"></a>

```typescript
public readonly autoConnectInput: number;
```

- *Type:* number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput"></a>

```typescript
public readonly captivePortalInput: number;
```

- *Type:* number

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput"></a>

```typescript
public readonly disableAutoFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput"></a>

```typescript
public readonly excludeOfficeIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput"></a>

```typescript
public readonly precedenceInput: number;
```

- *Type:* number

---

##### `serviceModeV2ModeInput`<sup>Optional</sup> <a name="serviceModeV2ModeInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput"></a>

```typescript
public readonly serviceModeV2ModeInput: string;
```

- *Type:* string

---

##### `serviceModeV2PortInput`<sup>Optional</sup> <a name="serviceModeV2PortInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput"></a>

```typescript
public readonly serviceModeV2PortInput: number;
```

- *Type:* number

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput"></a>

```typescript
public readonly switchLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `serviceModeV2Mode`<sup>Required</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode"></a>

```typescript
public readonly serviceModeV2Mode: string;
```

- *Type:* string

---

##### `serviceModeV2Port`<sup>Required</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port"></a>

```typescript
public readonly serviceModeV2Port: number;
```

- *Type:* number

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeviceSettingsPolicyConfig <a name="DeviceSettingsPolicyConfig" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.Initializer"></a>

```typescript
import { deviceSettingsPolicy } from '@cdktf/provider-cloudflare'

const deviceSettingsPolicyConfig: deviceSettingsPolicy.DeviceSettingsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description">description</a></code> | <code>string</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect">autoConnect</a></code> | <code>number</code> | The amount of time in minutes to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal">captivePortal</a></code> | <code>number</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match">match</a></code> | <code>string</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence">precedence</a></code> | <code>number</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>string</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>number</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enablement of the ZT client switch lock. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#account_id DeviceSettingsPolicy#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#description DeviceSettingsPolicy#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#name DeviceSettingsPolicy#name}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

The amount of time in minutes to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#default DeviceSettingsPolicy#default}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#enabled DeviceSettingsPolicy#enabled}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#match DeviceSettingsPolicy#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#precedence DeviceSettingsPolicy#precedence}

---

##### `serviceModeV2Mode`<sup>Optional</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode"></a>

```typescript
public readonly serviceModeV2Mode: string;
```

- *Type:* string

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}

---

##### `serviceModeV2Port`<sup>Optional</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port"></a>

```typescript
public readonly serviceModeV2Port: number;
```

- *Type:* number

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#support_url DeviceSettingsPolicy#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}

---



