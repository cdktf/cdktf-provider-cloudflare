# `dataCloudflareNotificationPolicyWebhooksList` Submodule <a name="`dataCloudflareNotificationPolicyWebhooksList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicyWebhooksList <a name="DataCloudflareNotificationPolicyWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/notification_policy_webhooks_list cloudflare_notification_policy_webhooks_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList(scope: Construct, id: string, config: DataCloudflareNotificationPolicyWebhooksListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooksList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareNotificationPolicyWebhooksList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/notification_policy_webhooks_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooksList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result"></a>

```typescript
public readonly result: DataCloudflareNotificationPolicyWebhooksListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyWebhooksListConfig <a name="DataCloudflareNotificationPolicyWebhooksListConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyWebhooksListConfig: dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId">accountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/notification_policy_webhooks_list#account_id DataCloudflareNotificationPolicyWebhooksList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/notification_policy_webhooks_list#max_items DataCloudflareNotificationPolicyWebhooksList#max_items}

---

### DataCloudflareNotificationPolicyWebhooksListResult <a name="DataCloudflareNotificationPolicyWebhooksListResult" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyWebhooksListResult: dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyWebhooksListResultList <a name="DataCloudflareNotificationPolicyWebhooksListResultList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPolicyWebhooksListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPolicyWebhooksListResultOutputReference <a name="DataCloudflareNotificationPolicyWebhooksListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicyWebhooksList } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure">lastFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess">lastSuccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastFailure`<sup>Required</sup> <a name="lastFailure" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure"></a>

```typescript
public readonly lastFailure: string;
```

- *Type:* string

---

##### `lastSuccess`<sup>Required</sup> <a name="lastSuccess" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess"></a>

```typescript
public readonly lastSuccess: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyWebhooksListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a>

---



